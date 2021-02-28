import {Component, OnInit, ViewChild,Output,EventEmitter,Input ,ElementRef} from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {Feedback} from '../shared/answer-feedback';
import { validateBasis } from '@angular/flex-layout';
import {ThemeService} from '../theme/theme.service';
import {MediaObserver} from '@angular/flex-layout';
import Compressor from 'compressorjs';
import {MatDialog,MatDialogRef} from '@angular/material/dialog';
import {LoginComponent} from '../login/login.component';
// import {AnswerService} from '../services/answer.service';
import {FireAnswerService} from '../fire_store_services/fire-answer.service';
import {AuthService} from '../fire_store_services/auth.service';
@Component({
  selector: 'app-your-answer',
  templateUrl: './your-answer.component.html',
  styleUrls: ['./your-answer.component.scss']
})
export class YourAnswerComponent implements OnInit {
  @Output("answer_the_question") 
  toggle_comp: EventEmitter<any> = new EventEmitter();

  @Input() quest_id :any[];

  feedbackForm: FormGroup;
  feedback: Feedback;   // a feedback from used as a temp data storage variable
  images=[];
  image_names=[];
  @ViewChild('fform') feedbackFormDirective;

  @ViewChild('mainCont') mainCont: ElementRef<HTMLElement>;

  constructor(private fb: FormBuilder,private themeService: ThemeService,
              public media: MediaObserver,
              public auth: AuthService,
              public dialog:MatDialog,
              public ans_service: FireAnswerService) { 
    this.createForm();
  }
  is_logged_in=null;
  ngOnInit() {
    this.auth.user$.subscribe((user)=>{
      // console.log(user);
      this.is_logged_in=user;
    })
  }

  formErrors = {
    'body': '',
    'links':'',
    'file': '',
    'fileSource' : ''
  };
  validationMessages = {
    'body': {
      'required':      'Please provide an answer',
    },
    'links': {
    
    },
    'file': {
     
    },
    'fileSource' :{

    },
    'tags':{}
  };

  get f(){

    return this.feedbackForm.controls;

  }

  createForm(){
    this.feedbackForm=this.fb.group({ //write the initial value and the validators in []
      body: ['',[Validators.required]],
      links:[''],
     
      agree:false,
      file: null,
      fileSource:null,
    });

    this.feedbackForm.valueChanges.subscribe(data=> {this.onValueChanged(data);});
    this.onValueChanged(); // default param function if no params passed just reset the values 

  }


  clear_entries(){
  
    this.images=[];
    this.image_names=[];
  }

  onFileChange(event) {
    var self=this;
    if (event.target.files && event.target.files[0]) {
        
        var filesAmount = event.target.files.length;
        var main_file_info_event=event.target.files;
        for (let i = 0; i < filesAmount; i++) {

                var reader = new FileReader();
                var comp_file;
                var desired_size=50732*6;
                var orig_file_size=event.target.files[i].size;
                var desired_quality;
                if(orig_file_size<desired_size){
                  desired_quality=1;
                }
                else{
                  desired_quality=(desired_size)/orig_file_size;
                }


                console.log(orig_file_size);
                self.image_names.push(main_file_info_event[i].name);
                new Compressor(event.target.files[i], {
                  quality: desired_quality,
                  success(result) {
                   
                    comp_file=result;
                    console.log(result.size);
                    reader.readAsDataURL(comp_file);
                    
                    reader.onload = (revent:any) => {
                      
                     
                    self.images.push(revent.target.result); 
                    
                  
                    self.feedbackForm.patchValue({
                      fileSource: self.images
                    });
                    
                    setTimeout(()=>{self.mainCont.nativeElement.click();},100);

                    }
                  
                  },
                  error(err) {
                    console.log(err.message);
                  },
                });
             
               
                

          }
          
          
           
      }
    }

  clicked(){
    // dummy click event for the main container
    // image compressor demands a unessacary click
  }
  onSubmit(){   // submit button .. this is triggered when any button is pressed 
        // note that if a button has to be used and the user dont want the butoon to be used as submit button then 
        // a type="button" can be used along woth the mat button
    
        if(this.is_logged_in==null){
          this.dialog.open(LoginComponent,{width:'500px',height:'600px'});
        }
      else{
      
    
        this.feedback=this.feedbackForm.value;
        console.log(this.feedback);
        this.ans_service.add_a_answer(this.feedback,this.quest_id[0],this.quest_id[1]);
        // console.log(this.quest_id);
        this.feedbackFormDirective.resetForm();
        this.images=[];
        this.image_names=[];
        this.feedbackForm.reset({
          body: '',
          links: '',
          
          fileSource: [],
          file:null,
        
        });
        this.toggle_comp.emit();
        window.scroll(0,0); // when the form is submited scroll to the top of the form for another fresh entry
   
      }
  }

  onValueChanged(data?: any){ // default params in javascript

    if(!this.feedbackForm){ return;}

    const form=this.feedbackForm;

    for(const field in this.formErrors){
      if(this.formErrors.hasOwnProperty(field)){//reseting the property if property already exists
        this.formErrors[field]='';
        const control=form.get(field);
        if(control&& control.dirty&& !control.valid){
          const messages=this.validationMessages[field];
          for(const key in control.errors){
            if(control.errors.hasOwnProperty(key)){
              this.formErrors[field]+=messages[key]+' ';
            }
          }
        }
      }
    }

}
}
