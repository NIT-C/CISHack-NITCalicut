import { Component, OnInit, HostListener, Inject } from '@angular/core';
import {MatDialog,MatDialogRef} from '@angular/material/dialog';
import { SidenavService } from '../sidenav/sidenav.service';
import {MediaObserver} from '@angular/flex-layout';
import {LoginComponent} from '../login/login.component';
import { ThemeService } from '../theme/theme.service';

import { AuthService } from '../fire_store_services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  is_logged_in=null;
  current_user_avatar="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png";
 
  //media  service for size of the viewport
  constructor(private themeService: ThemeService,public media: MediaObserver,
              private sidenavService: SidenavService, public auth: AuthService,public dialog:MatDialog) { } 

  //standard public variables of class
  panelOpenState: boolean = false;
  current_tab:string="Home";
  all_tabs=["Home","Ask","Blog","Topics","Account","About","Contact"];
  down_bar_tabs=["Home","Blog","Account"];
  current_index=this.down_bar_tabs.indexOf(this.current_tab); //index of the current tab
  ngOnInit() {
    
  //highlighting feature for smaller devices
  
  

  //sidenav service for side nav data transfers both in and out
      if(this.sidenavService.subsVarforTabing==undefined){
      this.sidenavService.subsVarforTabing=this.sidenavService.
      invokeSidebar.subscribe((name:string)=>{
        this.current_tab=name;
        this.current_index=this.all_tabs.indexOf(name);
        // this.lighten_other_tabs();
      })
      }
      this.set_initial_user_state();
  }
  //dark mode toggler --------------- mode changes
  toggle() {
    const active = this.themeService.getActiveTheme() ;
    if (active.name === 'light') {
      this.themeService.setTheme('dark');
      
    } else {
      this.themeService.setTheme('light');
    }
  }
  //for toggle the downbar in mobile view
  togglePanel(){
    this.panelOpenState=!this.panelOpenState;
    
    if(this.panelOpenState){
      
      document.getElementById("down_bar").style.height="200px";
      document.getElementById("down_bar").style.color="#1292ee";
      document.getElementById("current-tab").style.color="#1292ee";
    }
    else{
      document.getElementById("down_bar").style.height="43px";
      document.getElementById("down_bar").style.color="var(--main-text)";
      document.getElementById("current-tab").style.color="#0077cf";
    }

  }


  //for toggling the side nav bar and sending data to sidenav service
	toggleRightSidenav() {
		
		this.sidenavService.onButClick();
  }
  
  //changing tabs while clicking in downbar 
  change_tab(tab:string){
    this.current_tab=tab;
    this.togglePanel();
    this.current_index=this.down_bar_tabs.indexOf(this.current_tab);
    // this.lighten_other_tabs();
    
  }
  //changing tabs in larger screen for navbar in lg Viewports
  change_tab_lg(tab:string){
    this.current_tab=tab;
    this.current_index=this.all_tabs.indexOf(this.current_tab);
    this.reset_other_tabs();

  }

  reset_other_tabs(){
   
    var x=document.getElementsByClassName("lg-nav-but");
    x[this.current_index]["style"].backgroundColor="var(--background-counter)";
    x[this.current_index]["style"].color="var(--light-grey)";
    for(var i=0;i<x.length;i++){
      if(i!=this.current_index){
        x[i]["style"].backgroundColor="var(--light-grey)";
        x[i]["style"].color="var(--background-counter)";
      }
    }
  }

  // lighten_other_tabs(){
  //   var x=document.getElementsByClassName("sub-buttons");
  //   x[this.current_index]["style"].fontWeight="550";
  //   for(var i=0;i<x.length;i++){
  //     if(i!=this.current_index){
  //       x[i]["style"].fontWeight="initial";
        
  //     }
  //   }
  // }
  //login form function
  OpenLoginForm(){
    this.dialog.open(LoginComponent,{width:'500px',height:'600px'});
  }


  set_initial_user_state(){
   
    this.auth.user$.subscribe((user)=>{
      // console.log(user);
      this.is_logged_in=user;
      this.current_user_avatar="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"; 
      if(this.is_logged_in!=null){
        this.current_user_avatar=user.photoURL; 
        
        this.auth.user$.subscribe((user)=>{
          // console.log(user);
          this.is_logged_in=user;
        
        })}
       })
  }

  


}
