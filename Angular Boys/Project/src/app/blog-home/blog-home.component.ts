
import { Component, OnInit } from '@angular/core';
import {LoginComponent} from '../login/login.component';
import {TopicClass} from '../shared/topic_class';
import {MatDialog,MatDialogRef} from '@angular/material/dialog';
import { TopicService } from '../services/topic.service';
import {MediaObserver} from '@angular/flex-layout';
import { ThemeService } from '../theme/theme.service';
import {BlogDataService} from '../blog-services/blog-data.service';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.scss']
})
export class BlogHomeComponent implements OnInit {
  topics: TopicClass[];
  selected_topic: TopicClass;
  blogs_template:any;
  onSelect(topicc: TopicClass){
    this.selected_topic=topicc;
  }
  constructor(public media: MediaObserver,public dialog:MatDialog,private topicService:TopicService,
              private themeService: ThemeService,
              private blog_service : BlogDataService) { }

  ngOnInit() {

    this.blog_service.get_blog_templ()
    .subscribe(ques=>{this.blogs_template= ques;
      console.log(this.blogs_template)
                 });

    // this.topicService.getTopics().subscribe(topics=> {this.topics=topics});
  }
  OpenLoginForm(){
    this.dialog.open(LoginComponent,{width:'500px',height:'600px'});
  }


}
