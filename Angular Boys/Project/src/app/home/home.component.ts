import { Component, OnInit } from '@angular/core';
import {LoginComponent} from '../login/login.component';
import {TopicClass} from '../shared/topic_class';
import {MatDialog,MatDialogRef} from '@angular/material/dialog';
import { TopicService } from '../services/topic.service';
import {MediaObserver} from '@angular/flex-layout';
import { ThemeService } from '../theme/theme.service';

import "@lottiefiles/lottie-player";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {
  topics: TopicClass[];
  selected_topic: TopicClass;
  onSelect(topicc: TopicClass){
    this.selected_topic=topicc;
  }
  constructor(public media: MediaObserver,public dialog:MatDialog,private topicService:TopicService,
              private themeService: ThemeService) { }

  ngOnInit() {
    this.topicService.getTopics().subscribe(topics=> {this.topics=topics});
  }
  OpenLoginForm(){
    this.dialog.open(LoginComponent,{width:'500px',height:'600px'});
  }


}
