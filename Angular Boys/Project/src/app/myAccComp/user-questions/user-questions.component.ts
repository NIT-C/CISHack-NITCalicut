
import { Component, OnInit } from '@angular/core';

//services
import {ThemeService} from '../../theme/theme.service';
// import {QuestionService} from '../services/question.service';
import {TopicService} from '../../services/topic.service';
import {Params,ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {switchMap} from 'rxjs/operators';

import {FireService} from '../../fire_store_services/fire.service'
import {Q_TEMP} from '../../database_templates/d_question_template';

import { AuthService } from '../../fire_store_services/auth.service';
// window data for device specifications
import {MediaObserver} from '@angular/flex-layout';
@Component({
  selector: 'app-user-questions',
  templateUrl: './user-questions.component.html',
  styleUrls: ['./user-questions.component.scss']
})
export class UserQuestionsComponent implements OnInit {
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
              private auth :AuthService,
              public fService : FireService,
              // private questionService:QuestionService,
              private topicService: TopicService
              ) { }
  
  ngOnInit() {
    this.auth.user$.subscribe((author)=>{
    this.fService.get_all_user_ques_templ(author.uid).subscribe(ques=>{this.questions= ques;
      this.print_questions();
                 });
                });
    this.select_catogory(0);
    
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

