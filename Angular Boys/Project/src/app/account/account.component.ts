import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme/theme.service';
import { AuthService } from '../fire_store_services/auth.service';
import {MatDialog,MatDialogRef} from '@angular/material/dialog';
import {MediaObserver} from '@angular/flex-layout';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  is_logged_in=null;
  user_name="Loading..."
  current_user_avatar="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png";

  selected_view=1;

  constructor(  public auth: AuthService,
    public media: MediaObserver,public dialog:MatDialog,
    private themeService: ThemeService) { }

  ngOnInit(): void {
    this.set_initial_user_state();
  }

  set_initial_user_state(){
   
    this.auth.user$.subscribe((user)=>{
      // console.log(user);
      this.is_logged_in=user;
      this.current_user_avatar="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"; 
      if(this.is_logged_in!=null){
        this.current_user_avatar=user.photoURL; 
        this.user_name=user.displayName;
        this.auth.user$.subscribe((user)=>{
          // console.log(user);
          this.is_logged_in=user;
        
        })}
       })
  }

  change_view(view_id){
    this.selected_view=view_id;
  }


}
