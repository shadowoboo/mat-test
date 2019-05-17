import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-survey-aa',
  templateUrl: './survey-aa.component.html',
  styleUrls: ['./survey-aa.component.scss']
})
export class SurveyAaComponent implements OnInit {
  isLinear: boolean;
  // basicFromGroup: FormGroup;
  constructor(private fb: FormBuilder) {
    // this.basicFromGroup = new FormGroup({
    //   name: new FormControl('', Validators.required)
    // })
  }
  qq = this.fb.group({
    name: ['', Validators.required],
  })
  ww = this.fb.group({
    name: ['', [Validators.required]],
  })
  ee = this.fb.group({
    name: ['', [Validators.required]],
  })
  rr = this.fb.group({
    name: ['', [Validators.required]],
  })
  tt = this.fb.group({
    name: ['', [Validators.required]],
  })
  ngOnInit() {
  }

}
