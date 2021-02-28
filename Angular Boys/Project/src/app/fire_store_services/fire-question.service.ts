import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, pipe } from 'rxjs';
import { map, timestamp } from 'rxjs/operators';

import {TOPICS} from '../database_templates/d_topics';
import {Q_TEMP} from '../database_templates/d_question_template';
import {Question} from '../shared/question_class';

import { Answers } from '../database_templates/d_answer';
import {Comments} from '../shared/comments_class';
import * as firebase from 'firebase/app';
import {Feedback} from '../shared/feedback';

import {TopicService} from '../services/topic.service';
import { AuthService } from '../fire_store_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class FireQuestionService {

  itemsCollection: AngularFirestoreCollection<TOPICS>;
  userCollection : AngularFirestoreCollection<any[]>;
  topics: Observable<any[]>;
  question_templates : Observable<any[]>;
  full_question : Observable<any[]>;
  all_answers : Observable<any[]>;
  all_comments : Observable<any[]>;
  constructor(public afs: AngularFirestore,
    public auth: AuthService,private topicService : TopicService) { 

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
  author="";
  // adding  a question to temporary database

  add_a_question(inp_ques : Feedback){
    var id=0;
    
    var new_ques : Question=new Question;

    new_ques.id=id;
    new_ques.title=inp_ques.title;
    new_ques.question=inp_ques.body;
    
    var link_text : string =inp_ques.links;

    var input_links: string[]=this.split_link_text(link_text);
    
    new_ques.links=input_links;
    new_ques.tags=this.split_link_text(inp_ques.tags);

    // change these default values
    new_ques.topic_id=inp_ques.topic_id;
    
    new_ques.catogory=this.topicService.getTopic_name(inp_ques.topic_id);

    for(var i=0;i<TOPICS.length;i++){
      if(TOPICS[i].id==inp_ques.topic_id){
        new_ques.catogory=TOPICS[i].topic;
      }
    }

    

    new_ques.no_of_answers=0;
    new_ques.sub_catorgory=''; // default; future development ====

    new_ques.likes=0;
  
    
   
   
    if(inp_ques.fileSource==null){
      new_ques.image=[];
    }
    else{
    new_ques.image=inp_ques.fileSource;
    }
    var today=new Date;
    new_ques.date=today.toISOString();

    // adding data-----------
    console.log(new_ques);

    

    // creating the question template

    var new_q_temp : Q_TEMP = new Q_TEMP;

    new_q_temp.likes=0;
    new_q_temp.no_of_answers=0;
    new_q_temp.title=new_ques.title;
    new_q_temp.date=new_ques.date;
    new_q_temp.cat_id=inp_ques.topic_id;

    
    this.auth.user$.subscribe((author)=>{new_ques.author=author.displayName;
      new_ques.avatar=author.photoURL;      
      var upload_data={
        likes : new_q_temp.likes,
        no_of_answers : new_q_temp.no_of_answers,
        title : new_q_temp.title,
        date : new_q_temp.date,
        cat_id : new_q_temp.cat_id,
        timestamp :firebase.firestore.FieldValue.serverTimestamp(),
        avatar:new_ques.avatar,
        author:new_ques.author,
        user_end_doc_id:null
      }
      
    // uploading template data to database

    var upload_ques_data= this.create_ques_data(new_ques);
    this.itemsCollection.doc(new_q_temp.cat_id.toString()).collection("question template").add(upload_data)
    .then(docRef => {
      console.log(upload_data);
      console.log("Document written with ID: ", docRef.id);
      
      // uploading document template to user account data

      upload_data.user_end_doc_id=docRef.id;
      this.userCollection.doc(author.uid).collection("question template")
      .add(upload_data);

      //uploading the full question into the database

     this.itemsCollection.doc(new_q_temp.cat_id.toString()).collection("question template")
       .doc(docRef.id).collection("full question").doc("0").set(upload_ques_data);


    })
    .catch(error => console.error("Error adding document: ", error))
    

  



  });
  
  
  }

  

}
