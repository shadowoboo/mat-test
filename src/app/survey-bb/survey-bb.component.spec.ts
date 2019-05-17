import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyBbComponent } from './survey-bb.component';

describe('SurveyBbComponent', () => {
  let component: SurveyBbComponent;
  let fixture: ComponentFixture<SurveyBbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyBbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyBbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
