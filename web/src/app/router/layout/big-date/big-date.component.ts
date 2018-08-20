import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-big-date',
  templateUrl: './big-date.component.html',
  styleUrls: ['./big-date.component.css']
})
export class BigDateComponent implements OnInit {

  dates: Array<any> = [
    {name: '恋爱日', date: moment('2017-09-13 00:00:00').format('YYYY-MM-DD')},
    {name: '第一次亲亲', date: moment('2017-10-22 00:00:00').format('YYYY-MM-DD')},
    {name: '亻可月巴女亭生日', date: moment('1965-11-09 00:00:00').format('YYYY-MM-DD')},
    {name: '亻可月巴女亭把我礼物弄丢', date: moment('2018-07-22 00:00:00').format('YYYY-MM-DD')}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
