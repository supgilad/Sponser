import { TestBed, inject } from '@angular/core/testing';

import { BusinessSearchService } from './business-search.service';

describe('BusinessSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusinessSearchService]
    });
  });

  it('should be created', inject([BusinessSearchService], (service: BusinessSearchService) => {
    expect(service).toBeTruthy();
  }));
});
