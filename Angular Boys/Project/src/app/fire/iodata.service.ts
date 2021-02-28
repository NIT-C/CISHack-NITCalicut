import { Injectable } from '@angular/core';


import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import {Item} from '../model/item';
import {COMMENT} from '../model/com';
@Injectable({
  providedIn: 'root'
})
export class IodataService {

  itemsCollection: AngularFirestoreCollection<Item>;

  items: Observable<any[]>;
  comments : Observable<any[]>;
  itemDoc :AngularFirestoreDocument<Item>;
  
  constructor(public afs: AngularFirestore) {
    // this.items = afs.collection('items').valueChanges();
    this.itemsCollection=this.afs.collection('items', ref=> ref.orderBy('name','desc'));
    // this.items= this.itemsCollection.snapshotChanges().pipe(map(changes=>{
    //   return changes.map(a=> {
    //     const data = a.payload.doc.data() as Item;
    //     data.id =  a.payload.doc.id;
    //     return data;
    //   });
    // }));

    this.items= this.itemsCollection.snapshotChanges().pipe(map(changes=>{
      return changes.map(a=> {
        const data = a.payload.doc.data() as Item;
        data.id =  a.payload.doc.id;
        
        return data;
      });
    }));

  }
  
  add_comments(comm,id){
    var com_sec=this.afs.collection('items').doc(id).collection("comment",ref=>ref.orderBy('title','desc'));
    var upload_data={
      title: comm
    }
    com_sec.add(upload_data);
  }

  getItems(){
    return this.items;
  } 
  get_comm(id){
    this.comments= this.itemsCollection.doc(id).collection("comment").snapshotChanges().pipe(map(changes=>{
      return changes.map(a=> {
        const data = a.payload.doc.data() as COMMENT;
        data.id =  a.payload.doc.id;
        return data;
      });
    }));
    return this.comments;
  }
  addItem(item : Item){
      var upload_data={
        name : item.name
      }
      this.itemsCollection.add(upload_data);
  }

  deleteItem(item : Item){
    this.itemDoc=this.afs.doc(`items/${item.id}`);

    this.itemDoc.delete();
  }




}
