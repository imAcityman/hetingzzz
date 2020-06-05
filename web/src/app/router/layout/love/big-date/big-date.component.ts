import {Component, OnInit} from '@angular/core';
import {RequestService} from '../../../../service/request.service';
import {CommonparamService} from '../../../../util/commonparam.service';
import {LoadingService} from '../../../../component/loading/loading.service';

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
    LoadingService.open();
    this.request.get('/user/getBigDate').subscribe(res => {
      LoadingService.close();
      if (res.code === CommonparamService.SUCCESS) {
        this.dates = res.data;
      }
    });
  }
}
