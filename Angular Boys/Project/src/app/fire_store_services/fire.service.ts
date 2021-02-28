import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

import {TOPICS} from '../database_templates/d_topics';
import {Q_TEMP} from '../database_templates/d_question_template';
import {Question} from '../shared/question_class';
import { Answers } from '../database_templates/d_answer';
import {Comments} from '../shared/comments_class';

import { AuthService } from '../fire_store_services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class FireService {

  itemsCollection: AngularFirestoreCollection<TOPICS>;
  userCollection : AngularFirestoreCollection<any[]>;

  topics: Observable<any[]>;
  question_templates : Observable<any[]>;
  user_question_templates : Observable<any[]>;
  user_answer_templates : Observable<any[]>;
  full_question : Observable<any[]>;
  all_answers : Observable<any[]>;
  all_comments : Observable<any[]>;
  constructor(public afs: AngularFirestore,public auth: AuthService) { 

    this.itemsCollection=this.afs.collection('topics', ref=> ref.orderBy('id','asc'));
    this.userCollection=this.afs.collection('users');

    this.topics= this.itemsCollection.snapshotChanges().pipe(map(changes=>{
      return changes.map(a=> {
        const data = a.payload.doc.data() as TOPICS;
        data.id =  a.payload.doc.id;
        
        return data;
      });
    }));
  }

  get_topics(){
    return this.topics;
  } 

  get_question_templ(id){
    this.question_templates= this.itemsCollection.doc(id).collection("question template", ref=> ref.orderBy('timestamp','desc')).snapshotChanges().pipe(map(changes=>{
      return changes.map(a=> {
        const data = a.payload.doc.data() as Q_TEMP;
        data.id =  a.payload.doc.id;
        data.cat_id=id;
        return data;
      });
    }));
    return this.question_templates;
  }

  get_full_question(id,doc_id){
    this.full_question= this.itemsCollection.doc(id).collection("question template")
      .doc(doc_id).collection("full question")
    .snapshotChanges().pipe(map(changes=>{
      return changes.map(a=> {
        const data = a.payload.doc.data() as Question;
        data.doc_id =  doc_id;
        data.cat_id= id;
        return data;
      });
    }));
    return this.full_question;
  }

  get_all_answers(id,doc_id){
    this.all_answers= this.itemsCollection.doc(id).collection("question template")
      .doc(doc_id).collection("full question")
      .doc('0').collection("answers", ref=> ref.orderBy('timestamp','desc'))
    .snapshotChanges().pipe(map(changes=>{
      return changes.map(a=> {
        const data = a.payload.doc.data() as Answers;
        data.doc_id =  a.payload.doc.id;
        return data;
      });
    }));
    return this.all_answers;
  }

  get_all_comments(id,doc_id,comm_id){
    this.all_comments= this.itemsCollection.doc(id).collection("question template")
      .doc(doc_id).collection("full question")
      .doc('0').collection("answers")
      .doc(comm_id).collection("comments", ref=> ref.orderBy('timestamp','asc'))
    .snapshotChanges().pipe(map(changes=>{
      return changes.map(a=> {
        const data = a.payload.doc.data() as Comments;
        data.doc_id =  a.payload.doc.id;
        return data;
      });
    }));
    return this.all_comments;
  }
  // returns all question templated made by the current user
  get_all_user_ques_templ(auth_id){

   
    this.user_question_templates= this.userCollection.doc(auth_id).collection("question template", ref=> ref.orderBy('timestamp','desc')).snapshotChanges().pipe(map(changes=>{
      return changes.map(a=> {
        const data = a.payload.doc.data() as Q_TEMP;
        data.id =  a.payload.doc.id;
        
        return data;
        });
      }));
 

    return this.user_question_templates;
  }

  get_all_user_ans_templ(auth_id){

   
    this.user_answer_templates= this.userCollection.doc(auth_id).collection("answer template", ref=> ref.orderBy('timestamp','desc')).snapshotChanges().pipe(map(changes=>{
      return changes.map(a=> {
        const data = a.payload.doc.data() as Q_TEMP;
        data.id =  a.payload.doc.id;
        
        return data;
        });
      }));
 

    return this.user_answer_templates;
  }


}
