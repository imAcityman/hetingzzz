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

  ngOnInit() {
    this.day = this.now.diff(this.targetDay, 'day');
  }

}
