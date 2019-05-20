import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxRadioSliderComponent } from './checkbox-radio-slider.component';

describe('CheckboxRadioSliderComponent', () => {
  let component: CheckboxRadioSliderComponent;
  let fixture: ComponentFixture<CheckboxRadioSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxRadioSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxRadioSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
