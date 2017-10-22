import { BusinessDiscountsComponent } from './business-discounts/business-discounts.component';
import { BusinessesComponent } from './businesses/businesses.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LoginComponent } from './login/login.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DiscountDetailComponent } from "./discount-detail/discount-detail.component";
import { DiscountsComponent } from "./discounts/discounts.component";

BusinessDiscountsComponent
const routes: Routes = [
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: DiscountDetailComponent },
  { path: 'businessDetail/:id', component: BusinessDiscountsComponent },  
  { path: 'discounts',     component: DiscountsComponent },
  { path: 'businesses',     component: BusinessesComponent },  
  { path: 'login', component:  LoginComponent},
  { path: 'welcome', component:  WelcomePageComponent},  
  { path: '', redirectTo: '/login', pathMatch: 'full' },

];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}