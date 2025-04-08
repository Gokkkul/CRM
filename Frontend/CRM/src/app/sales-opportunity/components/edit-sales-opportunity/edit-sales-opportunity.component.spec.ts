import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSalesOpportunityComponent } from './edit-sales-opportunity.component';

describe('EditSalesOpportunityComponent', () => {
  let component: EditSalesOpportunityComponent;
  let fixture: ComponentFixture<EditSalesOpportunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditSalesOpportunityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSalesOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
