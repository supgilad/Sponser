import { User } from './../models/user';
import { Router } from '@angular/router';
import { Headers, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  private loginUrl = 'api/login';   
  private headers: Headers = new Headers({'Content-Type': 'application/json'});
  private users: User[];

  constructor(private http: Http, private router: Router) {}

  // getUsers(): void {
  //   this.http
  //   .get(this.loginUrl)
  //   .map(response => response.json().data as User[]).subscribe((users: User[]) => {this.users = users });
  // }

  getUsers(): Observable<User[]> {
    return this.http
    .get(this.loginUrl)
    .map(response => response.json().data as User[]);
  }

  login(user: User): Observable<boolean> {
    return this.getUsers().map((users: User[]) => {this.users = users; 
      let authenticatedUser = this.users.find(u => u.email === user.email);
      if (authenticatedUser && authenticatedUser.password === user.password){
        localStorage.setItem("user", JSON.stringify(authenticatedUser));
        this.router.navigate(['welcome']);      
        return true;
      }
      return false;
    });

  }

  // login(user: User): Boolean {
  //   let authenticatedUser = this.users.find(u => u.email === user.email);
  //   if (authenticatedUser && authenticatedUser.password === user.password){
  //     localStorage.setItem("user", JSON.stringify(authenticatedUser));
  //     this.router.navigate(['welcome']);      
  //     return true;
  //   }
  //   return false;
  // }

  checkCredentials(): void{
    if (localStorage.getItem("user") === null){
        this.router.navigate(['login']);
    }
  }
 
    logout(): void {
      localStorage.removeItem("user");
      this.router.navigate(['login']);
    }
}
