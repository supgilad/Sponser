import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Discount } from '../models/discount';

@Injectable()
export class DiscountService {
    private discountsUrl = 'api/discounts'; 
    private headers = new Headers({'Content-Type': 'application/json'});
    
    constructor(private http: Http) { }

    getDiscounts(): Promise<Discount[]> {
        return this.http.get(this.discountsUrl)
        .toPromise()
        .then(response => response.json().data as Discount[])
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }

      getDiscount(id: number): Promise<Discount>{
        const url = `${this.discountsUrl}/${id}`;
        return this.http.get(url)
          .toPromise()
          .then(response => response.json().data as Discount)
          .catch(this.handleError);      
        }
        
        update(discount: Discount): Promise<Discount> {
            discount.likesToAchieve = +discount.likesToAchieve;
            const url = `${this.discountsUrl}/${discount.id}`;
            return this.http
              .put(url, JSON.stringify(discount), {headers: this.headers})
              .toPromise()
              .then(() => discount)
              .catch(this.handleError);
          }        
        
        create(prize: string, likesToAchieve: number, business: string): Promise<Discount> {
            return this.http.post(this.discountsUrl, JSON.stringify({prize: prize, likesToAchieve:likesToAchieve,
                business:business}), {headers : this.headers})
            .toPromise().then(res => res.json().data as Discount).catch(this.handleError);
        }

        delete(id: number): Promise<void> {
            const url = `${this.discountsUrl}/${id}`;
            return this.http.delete(url, {headers: this.headers})
              .toPromise()
              .then(() => null)
              .catch(this.handleError);
          }
}