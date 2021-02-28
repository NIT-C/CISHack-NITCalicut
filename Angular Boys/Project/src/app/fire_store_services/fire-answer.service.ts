import { Injectable } from '@angular/core';

import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

import {TOPICS} from '../database_templates/d_topics';
import {Q_TEMP} from '../database_templates/d_question_template';
import {Question} from '../shared/question_class';

import { Answers } from '../database_templates/d_answer';
import {Comments} from '../shared/comments_class';
import * as firebase from 'firebase/app';
import {Feedback} from '../shared/feedback';
import { AuthService } from '../fire_store_services/auth.service';

import {username} from '../shared/users_name';
import { user } from '../shared/user_data';
@Injectable({
  providedIn: 'root'
})
export class FireAnswerService {

  itemsCollection: AngularFirestoreCollection<TOPICS>;
  userCollection : AngularFirestoreCollection<any[]>;
  topics: Observable<any[]>;
  question_templates : Observable<any[]>;
  full_question : Observable<any[]>;
  all_answers : Observable<any[]>;
  all_comments : Observable<any[]>;
  constructor(public afs: AngularFirestore,
    public auth: AuthService) { 

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

  // helper functions

  
  

  // splitting the link text

  split_link_text(link_text:string) : string[]{
    var input_links:string[]=[];
    var temp_text:string='';
    var text_present:boolean=false;
    for(var i=0;i<link_text.length;i++){
      if(link_text[i]!=','){
        if(link_text[i]!=' '){
          text_present=true;
          temp_text+=(link_text[i]);
        }
      }
      else{
        input_links.push(temp_text);
        text_present=false;
        temp_text='';
      }

    } 

    if(text_present){
      input_links.push(temp_text);
      text_present=false;
      temp_text='';
    }

    return input_links;
  }

  create_ques_data(ques_data){

    var data ={

      id : 0,
      title : ques_data.title,

      question : ques_data.question,
      links : ques_data.links,
      tags : ques_data.tags,
      topic_id : ques_data.topic_id,

      catogory : ques_data.catogory,
      no_of_answers : ques_data.no_of_answers,
      sub_catorgory : ques_data.sub_catorgory,

      likes : ques_data.likes,

      author : ques_data.author,

      avatar : ques_data.avatar,
      image : ques_data.image,

      date : ques_data.date



    }

    return data;

  }

  find_ques_template(ques_id,cat_id,author_id){

    var full_question= this.itemsCollection.doc(cat_id).collection("question template")
      .doc(ques_id).collection("full question")
    .snapshotChanges().pipe(map(changes=>{
      return changes.map(a=> {
        const data = a.payload.doc.data() as Question;
        data.doc_id =  ques_id;
        data.cat_id= cat_id;
        return data;
      });
    })).subscribe(quest=>{
      var question_recd_fs= quest; 
      var question=quest[0];

      if(question!=undefined){
        var user_end_ques_temp={
          likes : question.likes,
          no_of_answers : question.no_of_answers,
          title : question.title,
          date : question.date,
          cat_id : question.cat_id,
          timestamp :firebase.firestore.FieldValue.serverTimestamp(),
          avatar:question.avatar,
          author:question.author,
          user_end_doc_id:ques_id
        }
  
        this.userCollection.doc(author_id).collection("answer template")
        .add(user_end_ques_temp);

      }
   
  });    
 

  }

  // adding  a question to temporary database

  add_a_answer(new_answ  , cat_id, ques_id ){
   
    var id:number;
    id=0

    var ans=new Answers;

    ans.id=id;

    ans.upvotes=0;
    ans.downvotes=0;
   
   
    ans.answer=new_answ.body;
    
    ans.links=this.split_link_text(new_answ.links);
    if(new_answ.fileSource==null){
      ans.image=[];
    }
    else{
      ans.image=new_answ.fileSource;
    }

    
    console.log("the id is : "+cat_id);
    this.auth.user$.subscribe((author)=>{ans.author=author.displayName;
      ans.avatar=author.photoURL;      
    
      var upload_data={
        id:0 ,
        upvotes : 0,
        downvotes :0,
        author : ans.author,
        answer : ans.answer,
        avatar : ans.avatar,
        links : ans.links,
        image : ans.image,
        no_of_comments : 0,
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
      }
      
    this.itemsCollection.doc(cat_id).collection("question template").
    doc(ques_id).collection("full question").doc('0').collection("answers")
    .add(upload_data);

  
    this.itemsCollection.doc(cat_id).collection("question template").
    doc(ques_id).collection("full question").doc('0').update({
      no_of_answers: firebase.firestore.FieldValue.increment(1)
   
      });

    this.itemsCollection.doc(cat_id).collection("question template").
    doc(ques_id).update({
      no_of_answers: firebase.firestore.FieldValue.increment(1)
    
      });

      this.find_ques_template(ques_id,cat_id,author.uid);
      
    });
  }

  add_comment(form_com  , cat_id, ques_id, ans_id ){
    
    var commented_author;

    this.auth.user$.subscribe((author)=>{commented_author=author.displayName;
          
      
   
    var upload_comm={
      id: 0,
      likes :0,
      comment : form_com.comment,
      author : commented_author,
      timestamp : firebase.firestore.FieldValue.serverTimestamp(),
      avatar : author.photoURL
    }
    this.itemsCollection.doc(cat_id).collection("question template").
    doc(ques_id).collection("full question").doc('0').collection("answers")
    .doc(ans_id).collection("comments")
    .add(upload_comm);
    });

    // problem with update .. when we update the comments number it resets the view and 
    // closes the comment bar
    
    // this.itemsCollection.doc(cat_id).collection("question template").
    // doc(ques_id).collection("full question").doc('0').collection("answers")
    // .doc(ans_id).update({
    //   no_of_comments: firebase.firestore.FieldValue.increment(1)

    //   });

  }

  upvote_answer(cat_id,ques_id,ans_id,val){ 
          this.itemsCollection.doc(cat_id).collection("question template").
          doc(ques_id).collection("full question").doc('0').collection("answers")
          .doc(ans_id).update({
            upvotes: firebase.firestore.FieldValue.increment(val)

            });

            var user_id;
            this.auth.user$.subscribe((author)=>{user_id=author.uid;
              
              if(val==1){
                this.userCollection.doc(user_id).collection("question").doc(ques_id).collection("answer").doc(ans_id).set({
                  vote: 1
                });
              }
              else{
               
                  this.userCollection.doc(user_id).collection("question").doc(ques_id).collection("answer").doc(ans_id).set({
                    vote : 0
                  });
        
                
              
              }
              
              });
      
  }


downvote_answer(cat_id,ques_id,ans_id,val){ 
      this.itemsCollection.doc(cat_id).collection("question template").
    doc(ques_id).collection("full question").doc('0').collection("answers")
    .doc(ans_id).update({
      downvotes: firebase.firestore.FieldValue.increment(val)

      });
      var user_id;
      this.auth.user$.subscribe((author)=>{user_id=author.uid;
        
        if(val==1){
          this.userCollection.doc(user_id).collection("question").doc(ques_id).collection("answer").doc(ans_id).set({
            vote: -1
          });
        }
        else{
          
            this.userCollection.doc(user_id).collection("question").doc(ques_id).collection("answer").doc(ans_id).set({
              vote : 0
            });
         
        
        }
        
        });

  }




 like_question(cat_id,ques_id,val){
        this.itemsCollection.doc(cat_id).collection("question template").
      doc(ques_id).collection("full question").doc('0').update({
        likes: firebase.firestore.FieldValue.increment(val)

        });

      this.itemsCollection.doc(cat_id).collection("question template").
      doc(ques_id).update({
        likes: firebase.firestore.FieldValue.increment(val)
      
        });
          var liked_user_id;
          
          this.auth.user$.subscribe((author)=>{liked_user_id=author.uid;
          console.log("user id :",liked_user_id);
          console.log("question id :",ques_id);
          if(val==1){
            this.userCollection.doc(liked_user_id).collection("question").doc(ques_id).set({
              qid : true
            });
          }
          else{

            this.userCollection.doc(liked_user_id).collection("question").doc(ques_id).set({
              qid :false
            });

          }
          
          });
  }

  get_liked_status(user_id,ques_id){
   
    var docRef= this.userCollection.doc(user_id).collection("question").doc(ques_id);

    
    return docRef.get();
  
  }

  get_upvote_status(user_id,ques_id,ans_id){

    var docRef= this.userCollection.doc(user_id).collection("question").doc(ques_id).collection("answer").doc(ans_id);

    
   
    
    return docRef.get();

  }


}
