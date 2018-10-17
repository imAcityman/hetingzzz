import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {RequestService} from '../../../service/request.service';
import {HttpParams} from '@angular/common/http';
import {CommonparamService} from '../../../util/commonparam.service';

@Component({
  selector: 'app-big-date',
  templateUrl: './big-date.component.html',
  styleUrls: ['./big-date.component.css']
})
export class BigDateComponent implements OnInit {

  dates: Array<any>;

  constructor(private request: RequestService) {
  }

  ngOnInit() {
    this.getBigDate();
  }

  getBigDate() {
    this.request.get('/user/getBigDate').subscribe(res => {
      if (res.code === CommonparamService.SUCCESS) {
        this.dates = res.data;
      }
    });
  }
}
