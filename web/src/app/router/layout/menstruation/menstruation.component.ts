import {Component, OnInit} from '@angular/core';
import {RequestService} from '../../../service/request.service';
import {HttpParams} from '@angular/common/http';
import * as moment from 'moment';

@Component({
  selector: 'app-menstruation',
  templateUrl: './menstruation.component.html',
  styleUrls: ['./menstruation.component.css']
})
export class MenstruationComponent implements OnInit {

  menstruationList = [];
  expectDate: string;

  constructor(private request: RequestService) {
  }

  getMenstruation() {
    this.request.get('/user/getMenstruation', new HttpParams()).subscribe((data) => {
      if (data.code === 1) {
        if (data.data.length > 0) {
          this.menstruationList = data.data;
          this.expectDate = moment(data.data[0].menstruationTime).add(28, 'day').format('MM月DD日');
        } else {
          this.expectDate = '请设置您上一次大姨妈日期';
        }

      }
    });
  }

  ngOnInit() {
    this.getMenstruation();
  }

}
