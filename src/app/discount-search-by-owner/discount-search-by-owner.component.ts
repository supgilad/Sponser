import { Discount } from '../models/discount';
import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
 
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
 
// Observable class extensions
import 'rxjs/add/observable/of';
 
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { DiscountSearchService } from "../services/discount-search.service";


@Component({
  selector: 'discount-search-by-owner',
  templateUrl: './discount-search.component.html',
  styleUrls: [ './discount-search.component.css' ],
  providers: [DiscountSearchService]
})
export class DiscountSearchByOwnerComponent implements OnInit {
  discounts: Observable<Discount[]>;
  private searchTerms = new Subject<string>();
 
  constructor(
    private discountSearchService: DiscountSearchService,
    private router: Router) {}
 
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
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
 
  gotoDetail(discount: Discount): void {
    let link = ['/detail', discount.id];
    this.router.navigate(link);
  }
}