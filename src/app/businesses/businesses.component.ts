import { BusinessService } from './../services/business-service';
import { Business } from './../models/business';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { BusinessSearchService } from '../services/business-search.service';
@Component({
  selector: 'app-businesses',
  templateUrl: './businesses.component.html',
  styleUrls: ['./businesses.component.css'],
  providers: [BusinessService, BusinessSearchService]
  
})
export class BusinessesComponent implements OnInit {

  businesses: Observable<Business[]>;
  selectedBusiness: Business;
  private searchTerms = new Subject<string>();
  
 
  constructor(
    private router: Router,
    private businessService: BusinessService,
    private businessSearchService: BusinessSearchService) { }
 
  // getDiscounts(): void {
  //   this.discountService.getDiscounts().then(discounts => this.discounts = discounts);
  // }
 
  // ngOnInit(): void {
  //   this.getDiscounts();
  // }
 
  onSelect(business: Business): void {
    this.router.navigate(['/businessDetail', business.id]);
  }
 


  // add(prize: string, likesToAchieve: number, business: string): void {
  //   if(!prize || !business) {return ;}
  //   this.discountService.create(prize, +likesToAchieve, business).then(this.selectedDiscount = null);
  //   //this.discountService.create(prize, +likesToAchieve, business).then(discount => {this.discounts.push(discount); this.selectedDiscount = null;})
  // }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  // sign(business: Business){
  //   this.campaignService.create(discount).then(() => null);
  // }
 
  ngOnInit(): void {
    this.businesses = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.businessSearchService.search(term, 'name')
        // or the observable of empty discounts if there was no search term
        : Observable.of<Business[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Business[]>([]);
      });
  }

}
