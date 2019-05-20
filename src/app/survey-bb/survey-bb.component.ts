import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { MatStepperIntl } from '@angular/material';
import { HttpClient } from '@angular/common/http';

import 'rxjs-compat';
// import { take, map, debounceTime } from 'rxjs/operators';
// import { of } from 'rxjs/observable/of';

// import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
// import { map, filter, switchMap } from 'rxjs/operators';
import 'rxjs';
// import { shareReplay } from 'rxjs/operators';
/**
 *  rxjs 目前交叉測試後只能引入一支 rxjs-compat 才正常
 *  若引入 rxjs 或引入 rxjs + rxjs-compat 皆不作動
 */



// 繼承(?)原設定，用新宣告的子類別覆蓋
export class TwStepperIntl extends MatStepperIntl {
  optionalLabel = '非必填';
}


@Component({
  selector: 'app-survey-bb',
  templateUrl: './survey-bb.component.html',
  styleUrls: ['./survey-bb.component.scss'],
  providers: [{ provide: MatStepperIntl, useClass: TwStepperIntl }]
})

export class SurveyBbComponent implements OnInit {
  countries$: any;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  // rams = ['20G', '64G', '256G','GGGGG','66666'];
  rams = [['20G', '64G', '256G', 'GGGGG', '66666'], ['AAA', 'bbb', 'QQQ']];
  nestForm = this.fb.group({
    // name: ['', Validators.required],
    name: this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required]
    }),
    info: this.fb.group({
      addr: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
    }),
    com: this.fb.group({
      cpu: ['', Validators.required],
      gpu: [''],
      ram: ['', Validators.required],
    })
  });

  ngOnInit() {
    // console.log(this.nestForm.get('name'));
    // console.log(`+++`, this.nestForm.get('name'));
    // console.log(`----`, this.nestForm);

    // init 取資料
    // this.countries$ = this.http.get<any[]>('../../assets/countries.json');

    // 文字增減時刷新資料
    this.nestForm // 這裡的 nestform
      .get('info') // 裡面的 info 這個 formgroup
      .get('country') // 裡面的 country 這個 key
      .valueChanges.debounceTime(300) // 當值改變時，觀察者物件回傳改變後的值。小於300毫秒內的改變則忽略不計
      .subscribe(
        inputCountry => {
          this.countries$ = this.http.get<any[]>('../../assets/countries.json').map(countries => {
            return countries.filter(country => country.name.indexOf(inputCountry) >= 0);
          });
        }
      );



  }

  /* httpClient 中的 map方法要引入 rxjs
  * 而 rxjs 需要安裝 rxjs-compat 才有
  * npm install rxjs-compat
  */




  highlightFiltered(countryName: string) {
    const inputCountry = this.nestForm.get('info').get('country').value;
    // console.log(`inputCountry: `, inputCountry);
    // console.log(`countryName: `, countryName);

    return countryName.replace(inputCountry, `<span class="autocomplete-highlight">${inputCountry}</span>`);
  }







  aa() {
    console.log(`this.countries$: `, this.countries$);
    // console.log(`country.name: `, country.name);

  }

}
