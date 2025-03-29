import { TestBed } from '@angular/core/testing';

import { SalesOpportunitiesService } from './sales-opportunities.service';

describe('SalesOpportunitiesService', () => {
  let service: SalesOpportunitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesOpportunitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
