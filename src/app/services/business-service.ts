import { Business } from './../models/business';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BusinessService {
    private businesssUrl = 'api/businesses'; 
    private headers = new Headers({'Content-Type': 'application/json'});
    
    constructor(private http: Http) { }

    getBusinesses(): Promise<Business[]> {
        return this.http.get(this.businesssUrl)
        .toPromise()
        .then(response => response.json().data as Business[])
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }

      getBusiness(id: number): Promise<Business>{
        const url = `${this.businesssUrl}/${id}`;
        return this.http.get(url)
          .toPromise()
          .then(response => response.json().data as Business)
          .catch(this.handleError);      
        }
        
        update(business: Business): Promise<Business> {
            business.likes = +business.likes;
            const url = `${this.businesssUrl}/${business.id}`;
            return this.http
              .put(url, JSON.stringify(business), {headers: this.headers})
              .toPromise()
              .then(() => business)
              .catch(this.handleError);
          }        
        
        create(name: string): Promise<Business> {
            return this.http.post(this.businesssUrl, JSON.stringify({name: name}), {headers : this.headers})
            .toPromise().then(res => res.json().data as Business).catch(this.handleError);
        }

        delete(id: number): Promise<void> {
            const url = `${this.businesssUrl}/${id}`;
            return this.http.delete(url, {headers: this.headers})
              .toPromise()
              .then(() => null)
              .catch(this.handleError);
          }
}