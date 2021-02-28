import {Routes} from '@angular/router';


import {HomeComponent} from '../home/home.component';
import {TopicQuestionsComponent} from '../topic-questions/topic-questions.component'
import {QuestionsComponent} from '../questions/questions.component';
import {AskQuestionComponent} from '../ask-question/ask-question.component';
import {AuthGuard} from '../auth.guard';

import {BlogHomeComponent} from '../blog-home/blog-home.component';
import {BlogFullComponent} from '../blog-full/blog-full.component';

import {WriteBlogComponent} from '../write-blog/write-blog.component';
// import {FirebaseReferComponent} from '../firebase-refer/firebase-refer.component';
import {UserProfileComponent} from '../user-profile/user-profile.component';

import {AccountComponent} from '../account/account.component';


export const routes :Routes=[
    {
        path:'home',component: HomeComponent
    },

    {
        path: '',redirectTo: '/home', pathMatch: 'full'
    },
    {
        path:'topicQuestions/:topic_id',component: TopicQuestionsComponent
    },
    {
        path:'questions/:ques_id/:cat_id',component: QuestionsComponent
    },
    {
        path:'ask',component: AskQuestionComponent ,canActivate: [AuthGuard]
    },
    {
        path:'user',component: UserProfileComponent
    },
    {
        path:'blog',component: BlogHomeComponent
    },
    {
        path:'blogFull/:blog_id',component: BlogFullComponent
    },
    {
        path:'write_blog',component: WriteBlogComponent ,canActivate: [AuthGuard]
    },
    {
        path:'account',component : AccountComponent ,canActivate: [AuthGuard]
    }
  

];

