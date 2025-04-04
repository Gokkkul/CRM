import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSalesOpportunityComponent } from './view-sales-opportunity.component';

describe('ViewSalesOpportunityComponent', () => {
  let component: ViewSalesOpportunityComponent;
  let fixture: ComponentFixture<ViewSalesOpportunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewSalesOpportunityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSalesOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
