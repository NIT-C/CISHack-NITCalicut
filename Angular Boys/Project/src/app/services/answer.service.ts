import { Injectable } from '@angular/core';
import {Feedback} from '../shared/answer-feedback';
import {Answers} from '../shared/answers_class';
import {Question} from '../shared/question_class';
import {QUESTIONS} from '../shared/questions';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor() { }

  
  get_last_id(quest_id:number) :number{
    var ans,last_id;

    ans=QUESTIONS[quest_id].answers;
    if(ans==undefined || ans==null){
      last_id=-1;
    }
    else if(ans.length==0){
      last_id=-1;
    }
    else{
    last_id=ans[ans.length-1].id;
    }
    return last_id;
  }

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


  add_answer(new_answ : Feedback,ques_id:number){
    
    var id:number;
    id=this.get_last_id(ques_id)+1;

    var ans=new Answers;

    ans.id=id;

    ans.upvotes=0;
    ans.downvotes=0;
    ans.author="abhinavp";

    ans.answer=new_answ.body;
    ans.comments=[];
    ans.links=this.split_link_text(new_answ.links);
    if(new_answ.fileSource==null){
      ans.image=[];
    }
    else{
      ans.image=new_answ.fileSource;
    }
    

    QUESTIONS[ques_id].answers.push(ans);
    QUESTIONS[ques_id].no_of_answers++;


  }

}
