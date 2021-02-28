import { Component, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import { SidenavService } from './sidenav.service';
// receiving the media window size in the app
import {MediaObserver} from '@angular/flex-layout';
import {MediaMatcher} from '@angular/cdk/layout';
import { ThemeService } from '../theme/theme.service';
import {RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  
})
export class SidenavComponent implements OnInit {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  constructor(public media: MediaObserver,private sidenavService: SidenavService,
              private changeDetectorRef:ChangeDetectorRef,private medias: MediaMatcher,
              private themeService: ThemeService) { 
        this.mobileQuery = medias.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
  }
  toggle:boolean=false;
  ngOnInit() {

    
    

    if(this.sidenavService.subsVar==undefined){
      this.sidenavService.subsVar=this.sidenavService.
      invokeheader.subscribe((name:string)=>{
        this.sideFun();
      })
    }
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  
  sideFun(){
    this.toggle=!this.toggle;
  }

  side_change_tab(tab:string){
    this.sidenavService.onSidenavclick(tab);
    this.toggle=!this.toggle;
  }
  // when changing component via routing change the scroll to top
  // for confortable viewing experience
  onActivate(event){
    window.scroll(0,0);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
 
}
