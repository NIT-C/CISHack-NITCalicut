//default modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
// firestore modules
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';


//material list and card modules
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
//routing modules
import {RouterModule,Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {routes} from './app-routing/routes';
import {AppRoutingModule} from './app-routing/app-routing.module';

//dialogue module
import {MatDialogModule} from '@angular/material/dialog'

//slidebar and reactive forms modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms'; 

import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {ReactiveFormsModule} from '@angular/forms';

//material progress bar module
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


//expansion module
import {MatExpansionModule} from '@angular/material/expansion';


//all components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FirebaseReferComponent } from './firebase-refer/firebase-refer.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoadingAnimComponent } from './loading-anim/loading-anim.component';


//side nav
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav/sidenav.component';
import {SidenavService} from './sidenav/sidenav.service';
import { LoginComponent } from './login/login.component';

//services
import {TopicService} from './services/topic.service';
import {QuestionService} from './services/question.service';

import {ThemeService} from './theme/theme.service';
import { ThemeModule } from './theme/theme.module';
import { lightTheme } from './theme/light-theme';
import { darkTheme } from './theme/dark-theme';
import { TopicQuestionsComponent } from './topic-questions/topic-questions.component';
import { QuestionsComponent } from './questions/questions.component';

import {UserService} from './services/user.service';
import { AskQuestionComponent } from './ask-question/ask-question.component';

import { HttpClientModule } from '@angular/common/http';
import { YourAnswerComponent } from './your-answer/your-answer.component';

import {IodataService} from './fire/iodata.service';
import {FireService} from './fire_store_services/fire.service';
import {FireQuestionService} from './fire_store_services/fire-question.service';
import {FireAnswerService} from './fire_store_services/fire-answer.service';

import {BlogDataService} from './blog-services/blog-data.service'


// code highlighter
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { WriteBlogComponent } from './write-blog/write-blog.component';
import { BlogFullComponent } from './blog-full/blog-full.component';
import { AccountComponent } from './account/account.component';
import { UserQuestionsComponent } from './myAccComp/user-questions/user-questions.component';
import { UserAnswersComponent } from './myAccComp/user-answers/user-answers.component';
import { UserBlogComponent } from './myAccComp/user-blog/user-blog.component';


@NgModule({
  declarations: [
  
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SidenavComponent,
    LoginComponent,
    TopicQuestionsComponent,
    QuestionsComponent,
    AskQuestionComponent,
    YourAnswerComponent,
   
    FirebaseReferComponent,
   
    UserProfileComponent,
   
    LoadingAnimComponent,
   
    BlogHomeComponent,
   
    WriteBlogComponent,
   
    BlogFullComponent,
   
    AccountComponent,
   
    UserQuestionsComponent,
   
    UserAnswersComponent,
   
    UserBlogComponent
    
  ],
  imports: [
    HighlightModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    MatDialogModule,
    MatFormFieldModule, 
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    AngularFireAuthModule,
    MatSelectModule,
    MatSlideToggleModule,
    ReactiveFormsModule,

    MatProgressSpinnerModule,
    
    MatExpansionModule,
    MatSidenavModule,
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: 'light'
    })

    
  
  ],
  providers: [SidenavService,TopicService,ThemeService,QuestionService,UserService,
      IodataService,
      FireService,
      FireQuestionService,
      FireAnswerService,
      BlogDataService,
      {
        provide: HIGHLIGHT_OPTIONS,
        useValue: {
          fullLibraryLoader: () => import('highlight.js'),
        }
      }
  ],
  entryComponents:[
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
