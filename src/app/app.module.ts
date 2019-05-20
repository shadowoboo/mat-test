import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatToolbarModule, MatListModule, MatMenuModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatDatepickerModule, MatSelectModule, MatCheckboxModule, MatRadioModule, MatSlideToggleModule, MatSliderModule, MatGridListModule, MatCardModule, MatProgressBarModule, MatProgressSpinnerModule, MatDialogModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRippleModule, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SurveyAaComponent } from './survey-aa/survey-aa.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SurveyBbComponent } from './survey-bb/survey-bb.component';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { CheckboxRadioSliderComponent } from './checkbox-radio-slider/checkbox-radio-slider.component';
import { GridComponent } from './grid/grid.component';
import { AddPostDialogComponent } from './add-post-dialog/add-post-dialog.component';
// import { Observable } from 'rxjs';
// import 'moment';



export const TW_FORMATS = {
  parse: {
    dateInput: 'YYYY/MM/DD'
  },
  display: {
    dateInput: 'YYYY / MM / DD',
    monthYearLabel: 'YYYY MMM',
    dateA11yLabel: 'YYYY/MM/DD',
    monthYearA11yLabel: 'YYYY MMM'
  }
};
@NgModule({
  declarations: [
    AppComponent,
    SurveyAaComponent,
    SurveyBbComponent,
    DatepickerComponent,
    CheckboxRadioSliderComponent,
    GridComponent,
    AddPostDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatButtonToggleModule,
    MatRippleModule,
    MatSidenavModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatMenuModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,

    ReactiveFormsModule,
    FormsModule,

    FlexLayoutModule,
    MatAutocompleteModule,

    MatDatepickerModule,
    MatMomentDateModule,

    MatSelectModule,

    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatSliderModule,


    MatGridListModule,
    MatCardModule,

    MatProgressBarModule,
    MatProgressSpinnerModule,

    MatDialogModule,

  ],
  providers: [HttpClientModule,
    { provide: MAT_DATE_LOCALE, useValue: 'zh-TW' },
    { provide: MAT_DATE_FORMATS, useValue: TW_FORMATS },
  ],
  bootstrap: [AppComponent],

  entryComponents:[AddPostDialogComponent]
})
export class AppModule { }


