import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Discount } from "../discount";
import { Router } from "@angular/router";
import { DiscountService } from "../services/discount.service";

import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { DiscountSearchService } from "../services/discount-search.service";
import { CampaignService } from "../services/campaign.service";

@Component({
  selector: 'discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./discounts.component.css'],
  providers: [DiscountService, DiscountSearchService, CampaignService]
})
export class DiscountsComponent implements OnInit {
  discounts: Discount[];
  selectedDiscount: Discount;
  private searchTerms = new Subject<string>();
  
 
  constructor(
    private router: Router,
    private campaignService: CampaignService,
    private discountService: DiscountService,
    private discountSearchService: DiscountSearchService) { }
 
  // getDiscounts(): void {
  //   this.discountService.getDiscounts().then(discounts => this.discounts = discounts);
  // }
 
  // ngOnInit(): void {
  //   this.getDiscounts();
  // }
 
  onSelect(discount: Discount): void {
    this.selectedDiscount = discount;
  }
 
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedDiscount.id]);
  }

  add(prize: string, likesToAchieve: number, business: string): void {
    if(!prize || !business) {return ;}
    this.discountService.create(prize, +likesToAchieve, business).then(this.selectedDiscount = null);
    //this.discountService.create(prize, +likesToAchieve, business).then(discount => {this.discounts.push(discount); this.selectedDiscount = null;})
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  sign(discount: Discount){
    this.campaignService.create(discount).then(() => null);
  }
 
  ngOnInit(): void {
    this.discounts = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.discountSearchService.search(term, 'business')
        // or the observable of empty discounts if there was no search term
        : Observable.of<Discount[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Discount[]>([]);
      });
  }

 
}


