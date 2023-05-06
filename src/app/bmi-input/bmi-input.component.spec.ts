import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BMIInputComponent } from './bmi-input.component';

describe('BMIInputComponent', () => {
  let component: BMIInputComponent;
  let fixture: ComponentFixture<BMIInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BMIInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BMIInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
