import { Component, OnInit } from '@angular/core';
import {MatDialog,MatDialogRef} from '@angular/material/dialog';
import {username} from '../shared/users_name';
import { AuthService } from '../fire_store_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<LoginComponent>,
    public auth: AuthService) { }

  ngOnInit() {
  }

}
