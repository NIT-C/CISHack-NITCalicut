import { Component, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {FireService} from '../fire_store_services/fire.service';

import {TOPICS} from '../database_templates/d_topics';
import {Q_TEMP} from '../database_templates/d_question_template';
@Component({
  selector: 'app-firebase-refer',
  templateUrl: './firebase-refer.component.html',
  styleUrls: ['./firebase-refer.component.scss']
})
export class FirebaseReferComponent implements OnInit {
  topics: TOPICS[];
  q_templates : Q_TEMP[];
  item : TOPICS=new TOPICS;
  constructor(public fires: FireService) {
    

  }

  ngOnInit() {
    this.fires.get_topics().subscribe(items=>{
      console.log(items);
      
      this.topics=items;
    });
    var id=0;
    this.fires.get_question_templ(id.toString()).subscribe(
      items=> {
        console.log(items);
        this.q_templates=items;
      }
    )
    
    this.fires.get_full_question(id.toString(),'yhkg7HmqRO0A5ZVaaIeM').subscribe(
      items=> {
        console.log(items);
        
      }
    )

    this.fires.get_all_answers(id.toString(),'yhkg7HmqRO0A5ZVaaIeM').subscribe(
      items=> {
        console.log(items);
        
        
      }
    );

    this.fires.get_all_comments(id.toString(),'yhkg7HmqRO0A5ZVaaIeM','21IDBU91ZCAqf737zwzs').subscribe(
      items=> {
        console.log(items);
        
      }
    );
   
  }

  onSubmit(){
    console.log(this.item);
    // if(this.item.name!=''){
    //   this.itemservice.addItem(this.item);
    //   this.itemservice.add_comments(this.item.name,'RlOXX0ASKgOEpUfNIR9X');
    // }
    // this.item.name='';

  }

  deleteItem(event, item){
    // this.itemservice.deleteItem(item);
  }


}
