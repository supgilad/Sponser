import { BusinessService } from './services/business-service';
import { BusinessesComponent } from './businesses/businesses.component';
import { AuthService } from './services/auth.service';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { AppComponent }  from './app.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DiscountDetailComponent } from "./discount-detail/discount-detail.component";
import { DiscountsComponent } from "./discounts/discounts.component";
import { DiscountSearchComponent } from "./discount-search/discount-search.component";
import { DiscountService } from "./services/discount.service";
import { CampaignService } from "./services/campaign.service";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { BusinessDiscountsComponent } from './business-discounts/business-discounts.component';
import { PrizesComponent } from './prizes/prizes.component';






@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    NgbModule.forRoot() ],
  declarations: [ 
    AppComponent,
    DashboardComponent,
    DiscountDetailComponent,
    DiscountsComponent,
    DiscountSearchComponent,
    LoginComponent,
    WelcomePageComponent,
    BusinessesComponent,
    BusinessDiscountsComponent,
    PrizesComponent],
    providers: [ DiscountService, CampaignService, AuthService, BusinessService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
