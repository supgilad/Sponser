import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  constructor(
    private authService: AuthService){}

  ngOnInit(){
      this.authService.checkCredentials();
  }

  logout() {
      this.authService.logout();
  }

}
