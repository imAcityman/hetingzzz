import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-big-date',
  templateUrl: './big-date.component.html',
  styleUrls: ['./big-date.component.css']
})
export class BigDateComponent implements OnInit {

  firstLoveDay: any = moment('2017-09-13 00:00:00').format('YYYY-MM-DD');
  firstKissDay: any = moment('2017-10-22 00:00:00').format('YYYY-MM-DD');
  hetingBirthday: any = moment('1965-11-09 00:00:00').format('YYYY-MM-DD');

  constructor() {
  }

  ngOnInit() {
  }

}
