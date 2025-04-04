import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesOpportunityChartComponent } from './sales-opportunity-chart.component';

describe('SalesOpportunityChartComponent', () => {
  let component: SalesOpportunityChartComponent;
  let fixture: ComponentFixture<SalesOpportunityChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalesOpportunityChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesOpportunityChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
