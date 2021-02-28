import { Injectable } from '@angular/core';
import {TopicClass} from '../shared/topic_class';
import {TOPICS} from '../shared/topics_data';
import {of, Observable} from  'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor() { }
  
  getTopics(): Observable<TopicClass[]>{
    return of(TOPICS).pipe(delay(0)); // simulate a server delay for testing.
                                      //remove thr delay in production
  }
  getTopic(id: number): Observable<TopicClass>{
   
    return of(TOPICS.filter((topic) => (topic.id===id))[0]).pipe(delay(0));// simulate a server delay for testing.
    //remove thr delay in production
     
  }
  getTopic_name(id: number){
   
    return TOPICS.filter((topic) => (topic.id===id))[0].topic// simulate a server delay for testing.
    //remove thr delay in production
     
  }
  getTopicIds(): Observable<number[] |any>{  
    return of(TOPICS.map(topic=>topic.id));

  }


}
