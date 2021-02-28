import { Component, OnInit } from '@angular/core';
import { AuthService } from '../fire_store_services/auth.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  constructor(public auth: AuthService) { }

  
}