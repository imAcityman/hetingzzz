import {Component, OnInit} from '@angular/core';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  targetDay = dayjs('2019-09-05');
  now = dayjs();
  day;

  ngOnInit() {
    this.day = this.now.diff(this.targetDay, 'day');
  }

}
