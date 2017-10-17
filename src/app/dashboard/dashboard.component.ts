import { Campaign } from '../models/campaign';
import { Component, OnInit } from '@angular/core';
import { CampaignService } from "../services/campaign.service";


@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.css' ],
  })
export class DashboardComponent implements OnInit {
    ngOnInit(): void {
        this.getCampaigns(); 
    }
    campaigns: Campaign[] = [];

    getCampaigns() : void {
        this.campaignService.getCampaigns().then(campaigns => this.campaigns = campaigns);          
    }
    
    addLike(campaign:Campaign): void {
        campaign.likesYouHaveNow++;
        if (campaign.likesYouHaveNow === campaign.discount.likesToAchieve){
            campaign.completed = true;
        }        
        this.campaignService.update(campaign)
          .then(() => this.getCampaigns());
      }

    constructor(private campaignService: CampaignService) {}


 }