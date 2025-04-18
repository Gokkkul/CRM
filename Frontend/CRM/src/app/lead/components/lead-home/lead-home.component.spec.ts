import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadHomeComponent } from './lead-home.component';

describe('LeadHomeComponent', () => {
  let component: LeadHomeComponent;
  let fixture: ComponentFixture<LeadHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeadHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
