import { Injectable,EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';


@Injectable()
export class SidenavService {
	
  invokeheader=new EventEmitter();
  invokeSidebar=new EventEmitter();
  subsVar: Subscription;
  subsVarforTabing: Subscription;
	toggle:boolean=false;
	
  onButClick(){
    this.invokeheader.emit();
  }
  onSidenavclick(tab:string){
    this.invokeSidebar.emit(tab);
  }

}