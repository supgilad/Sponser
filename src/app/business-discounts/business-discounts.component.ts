import { Discount } from './../models/discount';
import { DiscountSearchService } from './../services/discount-search.service';
import { BusinessService } from './../services/business-service';
import { Business } from './../models/business';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-business-discounts',
  templateUrl: './business-discounts.component.html',
  styleUrls: ['./business-discounts.component.css'],
  providers: [BusinessService, DiscountSearchService]  
})
export class BusinessDiscountsComponent implements OnInit {

  business: Business;
  discounts: Discount[];

  ngOnInit(): void {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.businessService.getBusiness(+params.get('id')))
    .subscribe(business => {this.business = business;
      this.discountSearchService.search(this.business.id, 'businessID').subscribe(
        discounts => this.discounts = discounts
      )});
}
constructor(private businessService: BusinessService,
    private discountSearchService: DiscountSearchService,
    private route: ActivatedRoute,
    private location: Location){}

    goBack(): void {
      this.location.back();
  }

    post() {
      this.business.likes = 15;
      this.business.posted = true;
      this.businessService.update(this.business).then();
    }

  addLikeToDiscount(discountID: number) {
     const discount = this.discounts.filter(
      discount => discount.id === discountID)[0];

      discount.likesSpent++;
      this.business.likes--;
  }

  removeLikeFromDiscount(discountID: number) {
    const discount = this.discounts.filter(
      discount => discount.id === discountID)[0];

      discount.likesSpent--;
      this.business.likes++;
      
  }

  save(): void {
      this.businessService.update(this.business)
        .then(() => this.goBack());
    }
}
