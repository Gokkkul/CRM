import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInteractionComponent } from './edit-interaction.component';

describe('EditInteractionComponent', () => {
  let component: EditInteractionComponent;
  let fixture: ComponentFixture<EditInteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditInteractionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
