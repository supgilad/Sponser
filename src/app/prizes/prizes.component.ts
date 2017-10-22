import { Discount } from './../models/discount';
import { DiscountService } from './../services/discount.service';
import { DiscountSearchService } from './../services/discount-search.service';
import { BusinessService } from './../services/business-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prizes',
  templateUrl: './prizes.component.html',
  styleUrls: ['./prizes.component.css'],
  providers: [BusinessService, DiscountSearchService] 
})
export class PrizesComponent implements OnInit {

  private successfulDiscounts: Discount[];

  constructor(private businessService: BusinessService,
    private discountService: DiscountService){}

  ngOnInit()  {
    this.discountService.getDiscounts().subscribe(discounts => {
      discounts.filter(
        discount => discount.likesSpent === discount.likesToAchieve);
        this.successfulDiscounts = discounts;
    })
  
  }

}
