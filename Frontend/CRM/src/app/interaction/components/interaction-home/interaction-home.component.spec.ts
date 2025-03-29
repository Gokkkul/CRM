import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionHomeComponent } from './interaction-home.component';

describe('InteractionHomeComponent', () => {
  let component: InteractionHomeComponent;
  let fixture: ComponentFixture<InteractionHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InteractionHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
