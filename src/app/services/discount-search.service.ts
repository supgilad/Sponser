import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
 
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Discount } from '../models/discount';


@Injectable()
export class DiscountSearchService {
 
  constructor(private http: Http) {}
 
  search(term: any, property: any): Observable<Discount[]> {
    return this.http
               .get(`api/discounts/?${property}=${term}`)
               .map(response => response.json().data as Discount[]);
  }


}