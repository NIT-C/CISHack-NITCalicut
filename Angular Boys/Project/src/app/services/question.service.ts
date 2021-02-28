import { Injectable } from '@angular/core';
//required imports
import {Question} from '../shared/question_class';
import {QUESTIONS} from '../shared/questions';
import {TOPICS} from '../shared/topics_data';
// form data from the user
import {Feedback} from '../shared/feedback';

import {of,observable, Observable} from  'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }
  
  all_questions(): Observable<Question[]>{
    return of(QUESTIONS).pipe(delay(0));
  }
  question: Question;
  question_by_id(id: number): Observable<Question>{
   
    return of(QUESTIONS.filter((question) => (question.id==id))[0]).pipe(delay(0));
     // testing for server latency
  }

  questions_by_topic(topic_id:number): Observable<Question[]>{
    
    return of(QUESTIONS.filter((questions) => (questions.topic_id==topic_id))).pipe(delay(0));
      // testing for server latency
  }

  questions_by_tag(tag: string): Observable<Question[]>{
    var questions_with_tag: Question[]=[];

    for (var i=0;i<QUESTIONS.length;i++){
      for (var j=0;j<QUESTIONS[i].tags.length;j++){
        if (QUESTIONS[i].tags[j]==tag){
          questions_with_tag.push(QUESTIONS[i]);
          break;
        }
      }
    }
    return of(questions_with_tag).pipe(delay(0)); // testing for server latency
  }

  //return the last id

  get_last_id():number{
    var last_id:number;

    last_id=QUESTIONS[QUESTIONS.length-1].id;

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

  // adding  a question to temporary database

  add_a_question(inp_ques : Feedback){
    var id=this.get_last_id()+1;
    
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
    
    new_ques.catogory="Computer Science";

    for(var i=0;i<TOPICS.length;i++){
      if(TOPICS[i].id==inp_ques.topic_id){
        new_ques.catogory=TOPICS[i].topic;
      }
    }

    

    new_ques.no_of_answers=0;
    new_ques.sub_catorgory=''; // default; future development ====

    new_ques.likes=0;
    new_ques.author="abhinavp";
    new_ques.avatar='./assets/images/engineeringdrawing.webp';
    new_ques.answers=[];
    if(inp_ques.fileSource==null){
      new_ques.image=[];
    }
    else{
    new_ques.image=inp_ques.fileSource;
    }
    var today=new Date;
    new_ques.date=today.toISOString();

    // adding data-----------
    QUESTIONS.push(new_ques);

  }

}
