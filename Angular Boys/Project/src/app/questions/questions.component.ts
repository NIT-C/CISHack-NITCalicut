import { Component, OnInit ,ViewChild } from '@angular/core';

import {Feedback} from '../shared/comment-feedback';

import {Question} from '../shared/question_class';
//services
import {FireAnswerService} from '../fire_store_services/fire-answer.service';
import {ThemeService} from '../theme/theme.service';
import {QuestionService} from '../services/question.service';
import {TopicService} from '../services/topic.service';
import {Params,ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {switchMap} from 'rxjs/operators';
import {UserService} from '../services/user.service';

import {FireService} from '../fire_store_services/fire.service';
import {Answers} from '../database_templates/d_answer';
import {Comments} from '../shared/comments_class';
import { AuthService } from '../fire_store_services/auth.service';
import {LoginComponent} from '../login/login.component';
// for large displays and window sizes 
import {MediaObserver} from '@angular/flex-layout';

// answer dialogue for answering 
import {MatDialog,MatDialogRef} from '@angular/material/dialog';
import {YourAnswerComponent} from '../your-answer/your-answer.component';
import { stringify } from '@angular/compiler/src/util';
import { NONE_TYPE, THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  question:Question;
  question_recd_fs : Question[];
  all_answers : Answers[];
  
  current_comment :Comments[]; 

  category:string="Loading.. ";
  panelOpenState: boolean = false;
  liked=false;
  is_voted_flag=true;
  vote_id_state=[0,1];

  curent_opened_comment:number =-1;
  desired_row_height=260;
  ans_img_height =260;
  vote_status=[];
  //
  upvoted=[];
  downvoted=[];
  code_question=[];
  code_answer=[];
  is_logged_in=null;
  current_user_avatar=null;
  constructor(private location: Location,
              public media: MediaObserver,
              private themeService: ThemeService,
              private route: ActivatedRoute,
              public auth: AuthService,
              private questionService:QuestionService,
              private topicService: TopicService,
              public dialog:MatDialog,
              private userService: UserService,
              public comAnsService : FireAnswerService,
              public FService : FireService) { }


  ngOnInit() {
    this.route.params.pipe(switchMap((params: Params) => this.FService.get_full_question(params['cat_id'],params['ques_id'])))
    .subscribe(quest=>{this.question_recd_fs= quest; 
        this.question=quest[0];
  
        if(this.question!=undefined){
          this.filter_code_from_question();
      this.set_topic(); this.set_initial_user_state();
        
      }
     
    });    
    
    this.route.params.pipe(switchMap((params: Params) => this.FService.get_all_answers(params['cat_id'],params['ques_id'])))
    .subscribe(ans=>{this.all_answers= ans;

      
            

      this.set_votes();

      this.filter_code_from_answers();
      
   

    });    
    
    
    

  }

  set_votes(){

    for(var i=0;i<this.all_answers.length;i++){
      if(this.is_logged_in==undefined){
        this.all_answers[i].vote_status=0;
        continue;
      }
      this.set_answer_upvote_status(this.all_answers[i].doc_id,i);

    }

  }

  set_answer_upvote_status(ans_id,answer_index){

    var vote_status;
    this.comAnsService.get_upvote_status(this.is_logged_in.uid,this.question.doc_id,ans_id).subscribe((doc)=>{

      if(doc.exists){

        vote_status=doc.data().vote;
        this.all_answers[answer_index].vote_status=vote_status;
        
      }
      else{
        this.all_answers[answer_index].vote_status=0;
      }

      
    });


  }


  filter_code_from_question(){

    var full_str:string=this.question.question;
    
    this.code_question= full_str.split("```");
    
    
  
  }

  filter_code_from_answers(){
    this.code_answer=[];
    for(var i=0;i<this.all_answers.length;i++){
      this.code_answer.push(this.all_answers[i].answer.split('```'));
    }
  }

  scroll_active:boolean =true;

  ngAfterViewChecked() {      
    if(this.scroll_active){
    try{  
    this.scrollToBottom();        }
    catch(err){}
   
    }
} 
  scrollToBottom(){

    var all_com=document.getElementsByClassName("comments-section");
    var scroll_height_val=all_com[this.curent_opened_comment].scrollHeight;

 
    all_com[this.curent_opened_comment].scrollTop = scroll_height_val;

    


  }

  set_topic():void{
    try{
    this.category=this.question.catogory;
    
    // this fixes the bug caused by the space occupied by the mat-grid when there is no image 
    if(this.question.image.length==0){
      this.desired_row_height=0;
    }
      }
      catch{  }

  }
  goBack() :void{
    this.location.back();
  }

  set_initial_user_state(){
   
      this.auth.user$.subscribe((user)=>{
        // console.log(user);
        this.is_logged_in=user;
        this.current_user_avatar="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"; 
        if(this.is_logged_in!=null){
          this.current_user_avatar=user.photoURL; 

          this.auth.user$.subscribe((user)=>{
            // console.log(user);
            this.is_logged_in=user;
           


            if(this.is_logged_in!=null){
              
              this.comAnsService.get_liked_status(user.uid,this.question.doc_id).subscribe((doc)=> {
                if (doc.exists) {
                 
                    this.liked=doc.data().qid;
                } else {
                    // doc.data() will be undefined in this case
                    
                    this.liked=false;
                   
                }
              })

              


            }
          })}
         })
  }
  
  togglePanel_details(){
    this.panelOpenState=!this.panelOpenState;
    
    if(this.panelOpenState){
      
      document.getElementById("down_bar_details").style.height="250px";
      
    }
    else{
      document.getElementById("down_bar_details").style.height="0px";

    }
  }

  reset_other_open_comments(id:number){
    var all_com=document.getElementsByClassName("comments-section");
    for(var i=0;i<all_com.length;i++){
      if(i!=id){
        all_com[i]["style"].maxHeight="0px";
        all_com[i]["style"].height="0px";
        
        all_com[i]["style"].overflow="hidden";
      }
    }
    
  }
  

  activate_comment(answ_number,ans_id){
    this.current_comment=[];
    this.FService.get_all_comments(this.question.cat_id,this.question.doc_id,ans_id).subscribe(
      comm=> {
        console.log(comm);
        this.current_comment=comm;
      }
    );
    this.togglePanel_com(answ_number);
 
  }

  togglePanel_com(id:number){
    var all_com=document.getElementsByClassName("comments-section");
    all_com[id].scrollTop = all_com[id].scrollHeight;
    all_com[id]["style"].height="auto";
    all_com[id]["style"].maxHeight="400px";
    all_com[id]["style"].overflow="auto";
    if(id==this.curent_opened_comment){
      id=-1;
    }
    this.reset_other_open_comments(id);
    this.curent_opened_comment=id;
  }
  
  upvote_caller_function(id:number,index:number,ans_id){ // this function calls the upoter function and 
                                    // changes the style of the upvoted class to give a blue color
    var vote_status=0;
    if(this.is_logged_in==null){
      this.dialog.open(LoginComponent,{width:'500px',height:'600px'});

    }else{

    this.comAnsService.get_upvote_status(this.is_logged_in.uid,this.question.doc_id,ans_id).subscribe((doc)=>{

      if(doc.exists){

        vote_status=doc.data().vote;
        
        
      }

      // functions for voting
                                
     
      if(vote_status==0){
       
        
        this.vote_id_state=[index,1];
        this.is_voted_flag=true;
        this.comAnsService.upvote_answer(this.question.cat_id,this.question.doc_id,ans_id,1);
        
  
      }
      else if(vote_status==-1){
        this.vote_id_state=[index,-1];
        this.is_voted_flag=true;
     
        this.comAnsService.downvote_answer(this.question.cat_id,this.question.doc_id,ans_id,-1);
        this.comAnsService.upvote_answer(this.question.cat_id,this.question.doc_id,ans_id,1);
  
      }
      else if(vote_status==1){
        this.vote_id_state=[index,0];
        this.is_voted_flag=true;
       
        this.comAnsService.upvote_answer(this.question.cat_id,this.question.doc_id,ans_id,-1);
      }
  


    });
    
    }
    
  }

  downvote_caller_function(id:number,index:number,ans_id){ 
    var vote_status=0;
    if(this.is_logged_in==null){
      this.dialog.open(LoginComponent,{width:'500px',height:'600px'});

    }
    else{
      this.comAnsService.get_upvote_status(this.is_logged_in.uid,this.question.doc_id,ans_id).subscribe((doc)=>{

        if(doc.exists){

          vote_status=doc.data().vote;
        }

        // downvote functions 
        
    
        if(vote_status==0){
        
          
          this.comAnsService.downvote_answer(this.question.cat_id,this.question.doc_id,ans_id,1);
    
        }
        else if(vote_status==1){
          
          this.comAnsService.upvote_answer(this.question.cat_id,this.question.doc_id,ans_id,-1);
          this.comAnsService.downvote_answer(this.question.cat_id,this.question.doc_id,ans_id,1);
    
        }
        else if(vote_status==-1){
          this.comAnsService.downvote_answer(this.question.cat_id,this.question.doc_id,ans_id,-1);
        }
    
      });
    }
  }



  liker_but(){
    if(this.is_logged_in==null){
      this.dialog.open(LoginComponent,{width:'500px',height:'600px'});

    }
    else{
      if(!this.liked){
      this.question.likes++;
      this.comAnsService.like_question(this.question.cat_id,this.question.doc_id,1);
        
    }
      else{
        this.question.likes--;
        this.comAnsService.like_question(this.question.cat_id,this.question.doc_id,-1);

        
      }
    }
  }

  answer_ques_state:boolean = false;

  answer_the_question(){
    this.answer_ques_state=!this.answer_ques_state;
    
    if(this.answer_ques_state){
      
      document.getElementById("write-answer-expansion").style.height="auto";
      document.getElementById("write-answer-expansion").style.opacity="1";
    }
    else{
      document.getElementById("write-answer-expansion").style.height="0px";
      document.getElementById("write-answer-expansion").style.opacity="0";
    }
  }

  collapse_comments(){
    if(this.curent_opened_comment!=-1){
    this.togglePanel_com(this.curent_opened_comment);
    }
  }

  // submiting comments to answers
  user: Feedback = new Feedback;
  
  OnSubmit(com_id){
    // preventing overscrolls
    if(this.is_logged_in==null){
      this.dialog.open(LoginComponent,{width:'500px',height:'600px'});

    }
    else{
    
    this.user.ans_id=com_id;
    // scrolling to bottom after commenting


    var question_id=this.question.id;
   
    console.log("user : ",this.user);
    this.comAnsService.add_comment(this.user,this.question.cat_id,this.question.doc_id
                  ,this.all_answers[com_id].doc_id);
    this.user={comment: '',ans_id:null};
    this.scroll_active=false;
    setTimeout(()=>{ this.scroll_active=true;},500);
  }
  }


  show_full_image(image_data){
    
   
    var image = new Image();
        image.src = image_data;

        var w = window.open("");
      w.document.write(image.outerHTML);
    

  }



}
