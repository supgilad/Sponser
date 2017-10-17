import { User } from './../models/user';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable }     from 'rxjs/Observable';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user = new User();
  public errorMsg = '';
  public users: User[];

  constructor(private authService: AuthService) {}

  // login() {
  //   if(this.authService.login(this.user) === null){
  //     this.errorMsg = 'did not fetch users from the server yet';
  //   }  else if(!this.authService.login(this.user)){
  //     this.errorMsg = 'Failed to login';
  // }

  login() {
    let result = this.authService.login(this.user).subscribe((result: boolean) => {
      if(result === false){
        this.errorMsg = 'Failed to login';
    } 
  });
  }

  ngOnInit() {
    //this.authService.getUsers();
  }
}
