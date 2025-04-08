import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSalesOpportunityComponent } from './add-sales-opportunity.component';

describe('AddSalesOpportunityComponent', () => {
  let component: AddSalesOpportunityComponent;
  let fixture: ComponentFixture<AddSalesOpportunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddSalesOpportunityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSalesOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
