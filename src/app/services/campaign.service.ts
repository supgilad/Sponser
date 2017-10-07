import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Campaign } from '../campaign';
import { Discount } from "../discount";


@Injectable()
export class CampaignService {
    private campaignsUrl = 'api/campaigns'; 
    private headers = new Headers({'Content-Type': 'application/json'});
    
    constructor(private http: Http) { }

    getCampaigns(): Promise<Campaign[]> {
        return this.http.get(this.campaignsUrl)
        .toPromise()
        .then(response => response.json().data as Campaign[])
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }

      getCampaign(id: number): Promise<Campaign>{
        const url = `${this.campaignsUrl}/${id}`;
        return this.http.get(url)
          .toPromise()
          .then(response => response.json().data as Campaign)
          .catch(this.handleError);      
        }
        
        update(campaign: Campaign): Promise<Campaign> {
            const url = `${this.campaignsUrl}/${campaign.id}`;
            return this.http
              .put(url, JSON.stringify(campaign), {headers: this.headers})
              .toPromise()
              .then(() => campaign)
              .catch(this.handleError);
          }        
        
        create(discount: Discount, likesYouHaveNow: number = 0, completed: boolean = false): Promise<Campaign> {
            return this.http.post(this.campaignsUrl, JSON.stringify({likesYouHaveNow: likesYouHaveNow,completed: completed,
            discount: {prize: discount.prize, likesToAchieve: discount.likesToAchieve, id: discount.id,
            business: discount.business}}), {headers : this.headers})
            .toPromise().then(res => res.json().data as Campaign).catch(this.handleError);
        }

        delete(id: number): Promise<void> {
            const url = `${this.campaignsUrl}/${id}`;
            return this.http.delete(url, {headers: this.headers})
              .toPromise()
              .then(() => null)
              .catch(this.handleError);
          }
}