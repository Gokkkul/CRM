import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailLogHomeComponent } from './email-log-home.component';

describe('EmailLogHomeComponent', () => {
  let component: EmailLogHomeComponent;
  let fixture: ComponentFixture<EmailLogHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmailLogHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailLogHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
