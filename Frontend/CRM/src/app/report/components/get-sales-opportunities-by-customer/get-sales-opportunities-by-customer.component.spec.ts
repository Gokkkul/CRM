import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSalesOpportunitiesByCustomerComponent } from './get-sales-opportunities-by-customer.component';

describe('GetSalesOpportunitiesByCustomerComponent', () => {
  let component: GetSalesOpportunitiesByCustomerComponent;
  let fixture: ComponentFixture<GetSalesOpportunitiesByCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetSalesOpportunitiesByCustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetSalesOpportunitiesByCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
