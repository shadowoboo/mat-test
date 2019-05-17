import { Component, OnInit } from '@angular/core';
// import 'moment';
import * as moment from 'moment';
/**
 * moment 要使用 import * as 某屬 from 某檔
 */

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  // startDate = moment(new Date(2019, 05, 06));
  /**
   *  注意: Date 內的格式為 年, 月, 日
   *    年: 一般西元年
   *    月: 從 0 ~ 11
   *    日: 1 是 當月1號。 -10 代表往前11天，100 代表往後99天
   *  若 月 跟 日 前面有 零 則會壞掉
   */

  startDate = moment(new Date(2019, 4, 6));
  // startDate = moment('2019-5-6');
  minDate = moment('2019-5-4');
  maxDate = moment('2030-5-10');

  /**
   * 不使用 new Date 物件，則輸入一般月份，不用從 0 開始
   */

  constructor() { }

  ngOnInit() {
  }

/**
 * 寫在 <input> 內 綁 [matDatepickerFiter]屬性
 * 會過濾 <mat-datepicker> 顯示的日期
 *
 * @param {moment.Moment} date
 * @returns {boolean}
 * @memberof DatepickerComponent
 */
dayFilter(date: moment.Moment): boolean {
    const day = date.day();
    return day == 2 || day == 5;
  }

}
