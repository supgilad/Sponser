import { Business } from './../models/business';
import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
 
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BusinessSearchService {

  constructor(private http: Http) {}
  
   search(term: string, property: string): Observable<Business[]> {
     return this.http
                .get(`api/businesses/?${property}=${term}`)
                .map(response => response.json().data as Business[]);
   }
}
