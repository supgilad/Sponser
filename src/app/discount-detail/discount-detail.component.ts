import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Discount } from "../discount";
import { DiscountService } from "../services/discount.service";

@Component({
  selector: 'discount-detail',  
  templateUrl: './discount-detail.component.html',
  styleUrls: [ './discount-detail.component.css' ],
})
export class DiscountDetailComponent implements OnInit {  
    ngOnInit(): void {
        this.route.paramMap
        .switchMap((params: ParamMap) => this.discountService.getDiscount(+params.get('id')))
        .subscribe(discount => this.discount = discount);
    }
    constructor(private discountService: DiscountService,
        private route: ActivatedRoute,
        private location: Location){}

    goBack(): void {
        this.location.back();
    }

    discount: Discount;

    save(): void {
        this.discountService.update(this.discount)
          .then(() => this.goBack());
      }

      delete(discount: Discount): void {
        this.discountService
            .delete(discount.id)
            .then(() =>  this.goBack())
        };
      
}