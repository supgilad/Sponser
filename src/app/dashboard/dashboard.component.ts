import { BusinessSearchService } from './../services/business-search.service';
import { Business } from './../models/business';
import { Campaign } from '../models/campaign';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.css' ],
    providers: [BusinessSearchService]    
  })
export class DashboardComponent implements OnInit {
    ngOnInit(): void {
        this.businessSearchService.search(true, 'posted').subscribe(
            businesses => this.businesses = businesses
    )}


    businesses: Business[] = [];

    constructor(private businessSearchService: BusinessSearchService) {}


 }