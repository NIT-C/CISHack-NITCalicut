import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, pipe } from 'rxjs';
import { map, timestamp } from 'rxjs/operators';

import * as firebase from 'firebase/app';
import {Feedback} from '../shared/blog-feedback';

import {blog_class} from '../shared/blog-data-class'

import { AuthService } from '../fire_store_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  itemsCollection: AngularFirestoreCollection<any>;
  userCollection : AngularFirestoreCollection<any[]>;

  blogs: Observable<any[]>;

  userinfoCollection :AngularFirestoreCollection<any[]>;

  full_blog : Observable<any[]>;
  blog_templates : Observable<any[]>;
  all_comments : Observable<any[]>;
  constructor(public afs: AngularFirestore,
    public auth: AuthService) { 

    this.itemsCollection=this.afs.collection('blog', ref=> ref.orderBy('id','asc'));
    this.userCollection=this.afs.collection('blog_users');
    this.userinfoCollection=this.afs.collection('users');
    this.blogs= this.itemsCollection.snapshotChanges().pipe(map(changes=>{
      return changes.map(a=> {
        const data = a.payload.doc.data();
        data.id =  a.payload.doc.id;
        
        return data;
      });
    }));
  }

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

      blog_data : ques_data.blog_data,
      links : ques_data.links,
      tags : ques_data.tags,

      no_of_comments : ques_data.no_of_comments,

      likes : ques_data.likes,

      author : ques_data.author,

      avatar : ques_data.avatar,
      image : ques_data.image,
      thumbnail : ques_data.image_thumb,
      date : ques_data.date

    }

    return data;

  }


  author="";

  add_a_blog(inp_ques : Feedback){
    var id=0;
    
    var new_blog : blog_class=new blog_class;

    new_blog.id=id;
    new_blog.title=inp_ques.title;
    new_blog.blog_data=inp_ques.body;
    
    var link_text : string =inp_ques.links;

    var input_links: string[]=this.split_link_text(link_text);
    
    new_blog.links=input_links;
    new_blog.tags=this.split_link_text(inp_ques.tags);

     
    new_blog.no_of_comments=0;

    new_blog.likes=0;
  
    if(inp_ques.fileSource==null){
      new_blog.image=[];
    }
    else{
    new_blog.image=inp_ques.fileSource;
    }
    if(inp_ques.fileSource_thumb==null){
      new_blog.image_thumb=[];
    }
    else{
    new_blog.image_thumb=inp_ques.fileSource_thumb;
    }
    var today=new Date;
    new_blog.date=today.toISOString();

    // adding data-----------
    console.log(new_blog);
    

    this.auth.user$.subscribe((author)=>{new_blog.author=author.displayName;
      new_blog.avatar=author.photoURL;      
      var upload_blog_data= this.create_ques_data(new_blog);
      var upload_data={
        likes : new_blog.likes,
        no_of_comments : new_blog.no_of_comments,
        title : new_blog.title,
        date : new_blog.date,
        timestamp :firebase.firestore.FieldValue.serverTimestamp(),
        avatar:new_blog.avatar,
        author:new_blog.author,
        thumbnail : new_blog.image_thumb,
        blog_user_end_id:null
      }
    
    this.itemsCollection.doc("blog data").collection("blog template").add(upload_data)
    .then(docRef => {
      console.log(upload_data);
      console.log("Document written with ID: ", docRef.id);


      this.itemsCollection.doc("blog data").collection("blog template")
        .doc(docRef.id).collection("full blog").doc("0").set(upload_blog_data);

        upload_data.blog_user_end_id=docRef.id;
        this.userinfoCollection.doc(author.uid).collection("blog template").add(upload_data);


    })
    .catch(error => console.error("Error adding document: ", error))
   

    
  });

  
  }

  get_blog_templ(){
    this.blog_templates= this.itemsCollection.doc("blog data").collection("blog template", ref=> ref.orderBy('timestamp','desc')).snapshotChanges().pipe(map(changes=>{
      return changes.map(a=> {
        const data = a.payload.doc.data();
        data.id =  a.payload.doc.id;
        return data;
      });
    }));
    return this.blog_templates;
  }

  get_blog_templ_of_user(user_id){
    this.blog_templates= this.userinfoCollection.doc(user_id).collection("blog template", ref=> ref.orderBy('timestamp','desc')).snapshotChanges().pipe(map(changes=>{
      return changes.map(a=> {
        const data = a.payload.doc.data();
        
        return data;
      });
    }));
    return this.blog_templates;
  }

  get_full_blog(doc_id){
    this.full_blog= this.itemsCollection.doc("blog data").collection("blog template").doc(doc_id).collection("full blog")
    .snapshotChanges().pipe(map(changes=>{
      return changes.map(a=> {
        const data = a.payload.doc.data();
        data.doc_id =  doc_id;
        
        return data;
      });
    }));
    return this.full_blog;
  }

  add_comment(form_com , ques_id){
    
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
    this.itemsCollection.doc("blog data").collection("blog template").doc(ques_id).collection("full blog")
    .doc('0').collection("comments")
    .add(upload_comm);
    });
  }

  get_all_comments(doc_id){
    this.all_comments= this.itemsCollection.doc("blog data").collection("blog template").doc(doc_id).collection("full blog")
    .doc('0').collection("comments", ref=> ref.orderBy('timestamp','asc'))
    .snapshotChanges().pipe(map(changes=>{
      return changes.map(a=> {
        const data = a.payload.doc.data();
        data.doc_id =  a.payload.doc.id;
        return data;
      });
    }));
    return this.all_comments;
  }

  like_question(doc_id,val){
      this.itemsCollection.doc("blog data").collection("blog template").doc(doc_id).collection("full blog")
      .doc('0').update({
      likes: firebase.firestore.FieldValue.increment(val)

      });

      this.itemsCollection.doc("blog data").collection("blog template").doc(doc_id).update({
        likes: firebase.firestore.FieldValue.increment(val)
      
        });
        var liked_user_id;
        
        this.auth.user$.subscribe((author)=>{liked_user_id=author.uid;
        console.log("user id :",liked_user_id);
        console.log("blog id :",doc_id);
        if(val==1){
          this.userCollection.doc(liked_user_id).collection("blog").doc(doc_id).set({
            qid : true
          });
        }
        else{

          this.userCollection.doc(liked_user_id).collection("blog").doc(doc_id).set({
            qid :false
          });

        }
        
        });
  }


  get_liked_status(user_id,doc_id){
   
    var docRef= this.userCollection.doc(user_id).collection("blog").doc(doc_id);

    
    return docRef.get();
  
  }


}