import { MatCheckboxModule, MatCheckboxChange } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-radio-slider',
  templateUrl: './checkbox-radio-slider.component.html',
  styleUrls: ['./checkbox-radio-slider.component.scss']
})
export class CheckboxRadioSliderComponent implements OnInit {
  // crsForm:FormGroup;
  crsForm: FormGroup;
  count = 0;
  indeterminateSelectedLight: boolean;
  constructor(private fb: FormBuilder) {
    this.crsForm = this.fb.group({
      allLight: [''],
      groundLight: [true],
      windowLight: [''],
      topLight: [''],
      rg1: [''],
      rg2: [''],
      slide1: [''],
      slide2: [''],
      slide3: [''],
      // colorSlider: this.fb.group({
        redSlider: [50],
        greenSlider: [100],
        blueSlider: [100],
        alphaSlider: [0.5],
      // }),
    });

  }



  ngOnInit() {
    // this._setSelectAllState();
  }



  countAdd() {
    this.count = this.count + 1;
  }


  checkAllChange($event: MatCheckboxChange) {
    this.crsForm.get('groundLight').setValue($event.checked);
    this.crsForm.get('windowLight').setValue($event.checked);
    this.crsForm.get('topLight').setValue($event.checked);
    console.log(`groundLight:  `);

    this._setSelectAllState();
  }


  lightForChange() {
    this._setSelectAllState();
  }

  private _setSelectAllState() {
    const groundLight = this.crsForm.get('groundLight').value;
    const windowLight = this.crsForm.get('windowLight').value;
    const topLight = this.crsForm.get('topLight').value;
    const count = (groundLight ? 1 : 0) + (windowLight ? 1 : 0) + (topLight ? 1 : 0);
    // console.log(`allLight --: `,this.crsForm.get('allLight'));
    this.crsForm.get('allLight').setValue(count === 3);
    // console.log(`allLight ++: `,this.crsForm.get('allLight'));

    this.indeterminateSelectedLight = count > 0 && count < 3;
  }


  get selectedRed() {
    // console.log(`this.crsForm.get('redSlider').value: `,this.crsForm.get('redSlider'));

    return this.crsForm.get('redSlider').value;
  }
  get selectedGreen() {
    return this.crsForm.get('greenSlider').value;
  }
  get selectedBlue() {
    return this.crsForm.get('blueSlider').value;
  }

  get selectedAlpha() {
    return this.crsForm.get('alphaSlider').value;
  }
  get selectedColorStyle() {
    // console.log(`rgba(${this.selectedRed},${this.selectedGreen},${this.selectedBlue},${this.selectedAlpha})`);

    return `rgb(${this.selectedRed},${this.selectedGreen},${this.selectedBlue},${this.selectedAlpha})`;
  }
}
