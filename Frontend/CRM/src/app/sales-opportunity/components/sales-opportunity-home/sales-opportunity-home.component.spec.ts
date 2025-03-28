import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesOpportunityHomeComponent } from './sales-opportunity-home.component';

describe('SalesOpportunityHomeComponent', () => {
  let component: SalesOpportunityHomeComponent;
  let fixture: ComponentFixture<SalesOpportunityHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalesOpportunityHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesOpportunityHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
