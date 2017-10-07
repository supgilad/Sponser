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




@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule ],
  declarations: [ 
    AppComponent,
    DashboardComponent,
    DiscountDetailComponent,
    DiscountsComponent,
    DiscountSearchComponent ],
    providers: [ DiscountService, CampaignService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
