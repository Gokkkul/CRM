import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetLeadsByStatusComponent } from './get-leads-by-status.component';

describe('GetLeadsByStatusComponent', () => {
  let component: GetLeadsByStatusComponent;
  let fixture: ComponentFixture<GetLeadsByStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetLeadsByStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetLeadsByStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
