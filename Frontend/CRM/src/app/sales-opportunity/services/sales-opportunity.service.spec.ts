import { TestBed } from '@angular/core/testing';

import { SalesOpportunityService } from './sales-opportunity.service';

describe('SalesOpportunityService', () => {
  let service: SalesOpportunityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesOpportunityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
