import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../../service/request.service';
import {Router} from '@angular/router';
import {HttpParams} from '@angular/common/http';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.less']
})
export class HealthComponent implements OnInit {

  menstruationList = [];
  expectDate: string;

  constructor(private request: RequestService, private router: Router) {
  }

  getMenstruation() {
    this.request.get('/user/getMenstruation', new HttpParams()).subscribe((data) => {
      if (data.isSuccess) {
        if (data.data.length > 0) {
          this.menstruationList = data.data;
          this.expectDate = dayjs(data.data[0].menstruationTime).add(30, 'day').format('MM月DD日');
        } else {
          this.expectDate = '请先设置';
        }
      }
    });
  }

  setToday() {
    const res = confirm('确认设置今天为经期？');
    if (res) {
      this.request.get('/user/setTodayMenstruation', new HttpParams()).subscribe((data) => {
        alert(data.msg);
        if (data.isSuccess) {
          this.ngOnInit();
        }
      });
    }
  }

  ngOnInit() {
    this.getMenstruation();
  }

}
