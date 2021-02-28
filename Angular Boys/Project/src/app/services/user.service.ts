import { Injectable } from '@angular/core';

import {USER} from '../shared/user_data_class';
import {user} from '../shared/user_data';
import {of, Observable} from  'rxjs';
import {delay} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getliked_data():Observable<any>{
    return of(user.questions_liked).pipe(delay(0)); 
  }
  get_like_state(id:any):Observable<any>{
    // implement binary serch here  for more speed;
    // impleting sorting in the server side ;
    // currenty implementing linear search for current lack of server side sorting
    return of(user.questions_liked.includes(id));
  }
  add_like(id:any){
    user.questions_liked.push(id);
  }

  remove_like(id:any){
    
    user.questions_liked.splice(user.questions_liked.indexOf(id),1);
  }

  add_comment_upvote(id:any){
    user.comments_upvoted.push(id);
  }
  add_comment_downvote(id:any){
    user.comments_downvoted.push(id);
  }
  remove_comment_upvote(id:any){
    user.comments_upvoted.splice(user.comments_upvoted.indexOf(id),1);
  }
  remove_comment_downvote(id:any){
    user.comments_downvoted.splice(user.comments_downvoted.indexOf(id),1);
  }

  get_comment_upvotes(ques_id:any):Observable<any>{

    var upvotes=[];
    for(var i=0;i<user.comments_upvoted.length;i++){
      if(user.comments_upvoted[i][0]==ques_id){
        upvotes.push(user.comments_upvoted[i][1]);
      }
    }
    return of(upvotes);

  }
  get_comment_downvotes(ques_id:any):Observable<any>{
 
    var downvotes=[];
    for(var i=0;i<user.comments_downvoted.length;i++){
      if(user.comments_downvoted[i][0]==ques_id){
        downvotes.push(user.comments_downvoted[i][1]);
      }
    }
  
    return of(downvotes);

  }
  
  getupvote_data():Observable<any>{
    return of(user.comments_upvoted).pipe(delay(0)); 
  }
  getdownvote_data():Observable<any>{
    return of(user.comments_downvoted).pipe(delay(0)); 
  }
}
