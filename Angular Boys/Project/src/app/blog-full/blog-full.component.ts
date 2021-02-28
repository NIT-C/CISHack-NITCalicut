import { Component, OnInit ,ViewChild } from '@angular/core';

import {Feedback} from '../shared/comment-feedback';

import {Question} from '../shared/question_class';
//services
// import {FireAnswerService} from '../fire_store_services/fire-answer.service';
import {ThemeService} from '../theme/theme.service';
import {QuestionService} from '../services/question.service';
import {TopicService} from '../services/topic.service';
import {Params,ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {switchMap} from 'rxjs/operators';
import {UserService} from '../services/user.service';


import {Answers} from '../database_templates/d_answer';
import {Comments} from '../shared/comments_class';
import { AuthService } from '../fire_store_services/auth.service';
import {LoginComponent} from '../login/login.component';
// for large displays and window sizes 
import {MediaObserver} from '@angular/flex-layout';

// answer dialogue for answering 
import {MatDialog,MatDialogRef} from '@angular/material/dialog';
import {YourAnswerComponent} from '../your-answer/your-answer.component';


// new services 
import {BlogDataService} from "../blog-services/blog-data.service";

@Component({
  selector: 'app-blog-full',
  templateUrl: './blog-full.component.html',
  styleUrls: ['./blog-full.component.scss']
})
export class BlogFullComponent implements OnInit {
  question=null;
  question_recd_fs : Question[];
  all_answers : Answers[];
  
  current_comment :Comments[]; 

  category:string="Loading.. ";
  panelOpenState: boolean = true;
  liked=false;
  curent_opened_comment:number =-1;
  desired_row_height=260;
  ans_img_height =260;
  upvoted=[];
  downvoted=[];
  code_question=[];
  code_answer=[];
  is_logged_in=null;
  current_user_avatar="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png";;
  constructor(private location: Location,
              public media: MediaObserver,
              private themeService: ThemeService,
              private route: ActivatedRoute,
              public auth: AuthService,
              private questionService:QuestionService,
              private topicService: TopicService,
              public dialog:MatDialog,
              private userService: UserService,
            
              public BService : BlogDataService) { }


  ngOnInit() {
    this.route.params.pipe(switchMap((params: Params) => this.BService.get_full_blog(params['blog_id'])))
    .subscribe(quest=>{this.question_recd_fs= quest; 
        this.question=quest[0];
  
        if(this.question!=undefined){
          this.filter_code_from_question();
          this.set_initial_user_state();
        
      }
     
    });    
    

  }

  filter_code_from_question(){

    var full_str:string=this.question.blog_data;
    
    this.code_question= full_str.split("```");
    
    
  
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


  goBack() :void{
    this.location.back();
  }

  set_initial_user_state(){
    /*
      this.userService.get_like_state(this.question.id).subscribe(like => this.liked=like);
      this.userService.get_comment_upvotes(this.question.id).subscribe(up=> this.upvoted=up);
      this.userService.get_comment_downvotes(this.question.id).subscribe(down=> this.downvoted=down); */
      // console.log(this.upvoted);
      this.auth.user$.subscribe((user)=>{
        // console.log(user);
        this.is_logged_in=user;
          
        if(this.is_logged_in!=null){
          this.current_user_avatar=user.photoURL;
          this.auth.user$.subscribe((user)=>{
            // console.log(user);
            this.is_logged_in=user;
      
            if(this.is_logged_in!=null){
              
              this.BService.get_liked_status(user.uid,this.question.doc_id).subscribe((doc)=> {
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
  

  activate_comment(){
    this.current_comment=[];
    this.BService.get_all_comments(this.question.doc_id).subscribe(
      comm=> {
        console.log(comm);
        this.current_comment=comm;
      }
    );
    this.togglePanel_com(0);
 
  }

  togglePanel_com(id:number){
    var all_com=document.getElementsByClassName("comments-section");
    all_com[id].scrollTop = all_com[id].scrollHeight;
    all_com[id]["style"].height="auto";
    all_com[id]["style"].maxHeight="500px";
    all_com[id]["style"].overflow="auto";
    if(id==this.curent_opened_comment){
      id=-1;
    }
    this.reset_other_open_comments(id);
    this.curent_opened_comment=id;
  }

  liker_but(){
    if(this.is_logged_in==null){
      this.dialog.open(LoginComponent,{width:'500px',height:'600px'});

    }
    else{
      if(!this.liked){
      this.question.likes++;
      this.BService.like_question(this.question.doc_id,1);
        
    }
      else{
        this.question.likes--;
        this.BService.like_question(this.question.doc_id,-1);

        
      }
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
    this.BService.add_comment(this.user,this.question.doc_id);
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
