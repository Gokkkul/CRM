import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSalesOpportunitiesByStageComponent } from './get-sales-opportunities-by-stage.component';

describe('GetSalesOpportunitiesByStageComponent', () => {
  let component: GetSalesOpportunitiesByStageComponent;
  let fixture: ComponentFixture<GetSalesOpportunitiesByStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetSalesOpportunitiesByStageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetSalesOpportunitiesByStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
