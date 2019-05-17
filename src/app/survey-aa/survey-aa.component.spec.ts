import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyAaComponent } from './survey-aa.component';

describe('SurveyAaComponent', () => {
  let component: SurveyAaComponent;
  let fixture: ComponentFixture<SurveyAaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyAaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyAaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
