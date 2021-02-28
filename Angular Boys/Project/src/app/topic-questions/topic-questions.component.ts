import { Component, OnInit } from '@angular/core';
import {Question} from '../shared/question_class';
//services
import {ThemeService} from '../theme/theme.service';
// import {QuestionService} from '../services/question.service';
import {TopicService} from '../services/topic.service';
import {Params,ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {switchMap} from 'rxjs/operators';

import {FireService} from '../fire_store_services/fire.service'
import {Q_TEMP} from '../database_templates/d_question_template';

import {fadeInAnimation} from '../animations/_fade';
// window data for device specifications
import {MediaObserver} from '@angular/flex-layout';
@Component({
  selector: 'app-topic-questions',
  templateUrl: './topic-questions.component.html',
  styleUrls: ['./topic-questions.component.scss'],


})
export class TopicQuestionsComponent implements OnInit {
  questions:Q_TEMP[];
  category:string;
  panelOpenState: boolean = false;

  //graphic constants
  color_pallet=['#dabdec','#9ae7dd','#a5e09c','#e5fe8a','#fbe2a8','#e499a2'];
  pallet_size=this.color_pallet.length;
  constructor(private location: Location,
              public media: MediaObserver,
              private themeService: ThemeService,
              private route: ActivatedRoute,
              public fService : FireService,
              // private questionService:QuestionService,
              private topicService: TopicService
              ) { }
  
  ngOnInit() {
    this.route.params.pipe(switchMap((params: Params) => this.fService.get_question_templ(params['topic_id'])))
    .subscribe(ques=>{this.questions= ques;
      this.print_questions();
                 });
    this.route.params.subscribe(params => this.select_catogory(params['topic_id']));
  }
 
  select_catogory(cat:number){ //debug version current tests unavailable .. can cause delays in sever when data space increases
   this.topicService.getTopic(+cat).subscribe( categ => this.category=categ.topic);
  }
  
  goBack() :void{
    this.location.back();
  }



  togglePanel_sort(){
    this.panelOpenState=!this.panelOpenState;
    
    if(this.panelOpenState){
      
      document.getElementById("down_bar_sort").style.height="200px";
      
    }
    else{
      document.getElementById("down_bar_sort").style.height="0px";

    }

  }

  

  //debug reports and tests .. --testers
  print_questions(){
    console.log(this.questions);
  }
}
