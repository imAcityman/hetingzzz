import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  targetDay = moment('2019-09-05');
  now = moment();
  day;

  constructor() {
  }

  ngOnInit() {
    this.day = this.targetDay.diff(this.now, 'day');
  }

}
