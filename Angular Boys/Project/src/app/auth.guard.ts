import { Injectable } from '@angular/core';
import { CanActivate, Router , ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService} from './fire_store_services/auth.service';
import {LoginComponent} from './login/login.component'
import { tap, map, take } from 'rxjs/operators';
import {MatDialog,MatDialogRef} from '@angular/material/dialog';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService,
    public dialog:MatDialog, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot,
               state: RouterStateSnapshot): Observable<boolean> {

      return this.auth.user$.pipe(
           take(1),
           map(user => !!user), // <-- map to boolean
           tap(loggedIn => {
             if (!loggedIn) {
              //  console.log('access denied')
              //  this.router.navigate(['/login']);
              
                this.dialog.open(LoginComponent,{width:'500px',height:'600px'});
            
             }
         })
    )
  }
  
}
