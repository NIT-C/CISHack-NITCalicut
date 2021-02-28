
import {Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {Feedback} from '../shared/blog-feedback';

// question services
import {BlogDataService} from '../blog-services/blog-data.service';

import Compressor from 'compressorjs';

import { validateBasis } from '@angular/flex-layout';
import {ThemeService} from '../theme/theme.service';
import {MediaObserver} from '@angular/flex-layout';



// fire question services for adding data to server
import {FireQuestionService} from '../fire_store_services/fire-question.service';

@Component({
  selector: 'app-write-blog',
  templateUrl: './write-blog.component.html',
  styleUrls: ['./write-blog.component.scss']
})

export class WriteBlogComponent implements OnInit {
  feedbackForm: FormGroup;
  feedback: Feedback;   // a feedback from used as a temp data storage variable
  images: string[]=[];
  image_names=[];
  images_thumb:string[]=[];
  image_names_thumb=[];
  
  @ViewChild('mainCont') mainCont: ElementRef<HTMLElement>;

  @ViewChild('fform') feedbackFormDirective;

  constructor(private fb: FormBuilder,public themeService: ThemeService
              ,public media: MediaObserver,
              public blog_service : BlogDataService) { 
    this.createForm();
  }

  ngOnInit() {
  
  }
  formErrors = {
    'title': '',
    'body': '',
    'links':'',
    'file': '',
    'fileSource' : '',
    'fileSource_thumb' : '',
    'tags':''

  };
  validationMessages = {
    'title': {
      'required':      'Title is required.',
      'minlength':     'Title must be at least 10 characters long.',
      'maxlength':     'Title cannot be more than 75 characters long.'
    },
    'body': {
      'required':      'Explain your Question',
    },
    'links': {
    
    },
    'file': {
     
    },
    'fileSource' :{

    },
    'fileSource_thumb':{
      
    },
    'tags':{}
    
  };

  get f(){

    return this.feedbackForm.controls;

  }

  createForm(){
    this.feedbackForm=this.fb.group({ //write the initial value and the validators in []
      title: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(75)]],
      body: ['',[Validators.required]],
      links:[''],
     
      agree:false,
      file: null,
      fileSource:null,
      fileSource_thumb:null,
      tags:['']
      
    });

    this.feedbackForm.valueChanges.subscribe(data=> {this.onValueChanged(data);});
    this.onValueChanged(); // default param function if no params passed just reset the values 

  }


  clear_entries(){
  
    this.images=[];
    
    this.image_names=[];
  }
  clear_entries_thumb(){
  
    this.images_thumb=[];
    
    this.image_names_thumb=[];
    this.feedbackForm.patchValue({
      fileSource: this.images
    });
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

  onFileChange_thumb(event) {
  
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
               
                self.image_names_thumb=[main_file_info_event[i].name];
                
                new Compressor(event.target.files[i], {
                  quality: desired_quality,
                  success(result) {
                    
                    comp_file=result;
                    console.log(result.size);
                    reader.readAsDataURL(comp_file);
                    
                    reader.onload = (revent:any) => {
                      
                      
                    
                    
                    
                    self.images_thumb=[revent.target.result]; 
                    self.feedbackForm.patchValue({
                      fileSource_thumb: self.images_thumb
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
    this.feedback=this.feedbackForm.value;
  
    // console.log(this.feedback);

    this.blog_service.add_a_blog(this.feedback);

    this.feedbackFormDirective.resetForm();
    this.images=[];
    this.image_names=[];
    this.feedbackForm.reset({
      title: '',
      body: '',
      links: '',
      
      agree: false,
      fileSource: [],
      fileSource_thumb:[],
      file:null,
      tags: '',
     
    });
    window.scroll(0,0); // when the form is submited scroll to the top of the form for another fresh entry
  
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
