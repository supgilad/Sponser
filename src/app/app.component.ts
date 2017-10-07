import { Component } from '@angular/core';

@Component({
 selector: 'my-app',
 template: `
 <h1>{{title}}</h1>
 <nav>
   <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
   <a routerLink="/discounts" routerLinkActive="active">Discounts</a>
 </nav>
 <router-outlet></router-outlet>
 `,
 styleUrls: ['./app.component.css'],
})
export class AppComponent {
 title = 'DIS APP';
}