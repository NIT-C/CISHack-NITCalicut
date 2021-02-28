import { Injectable } from '@angular/core';
import {Feedback} from '../shared/comment-feedback';
import {Comments} from '../shared/comments_class';
import {Question} from '../shared/question_class';
import {QUESTIONS} from '../shared/questions';


@Injectable({
  providedIn: 'root'
})
export class CommentAnsService {

  constructor() { }

  get_last_id(comment : Comments[]) : number{

    var id:number;
    if(comment==undefined || comment==null ){
      id=-1;
    }
    else if(comment.length==0){
      id=-1;
    }
    else{
      id=comment[comment.length-1].id;
    }
    
    return id;
  }

  add_comment(form_com : Feedback , ques_id:number ){
    var comment_Section=QUESTIONS[ques_id].answers[form_com.ans_id].comments;
    
    var id=this.get_last_id(comment_Section)+1;

    var new_comment : Comments=new Comments;

    new_comment.id=id;
    new_comment.likes=0;
    new_comment.comment=form_com.comment;
    new_comment.author='abhinavp';
   
    QUESTIONS[ques_id].answers[form_com.ans_id].comments.push(new_comment);

  }

}
