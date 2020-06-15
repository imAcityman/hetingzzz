import {Component, OnInit} from '@angular/core';
import {LoadingService} from '../../../../component/loading/loading.service';
import {RequestService} from '../../../../service/request.service';
import {MyStorageService} from '../../../../service/my.storage.service';
import * as moment from 'moment';

@Component({
  selector: 'app-oil',
  templateUrl: './oil.component.html',
  styleUrls: ['./oil.component.css']
})
export class OilComponent implements OnInit {
  loading = false;
  oilInfo: any = {};

  constructor(private request: RequestService, private myStorageService: MyStorageService) {
  }

  ngOnInit(): void {
    this.getOil();
  }

  getOil() {
    LoadingService.open();
    this.loading = true;
    this.request.get('/life/getOilInfo').subscribe((res) => {
      LoadingService.close();
      this.loading = false;
      if (res.isSuccess && res.data) {
        let js;
        this.myStorageService.oilUpdateTime = moment(res.data.date).toDate().getTime();
        for (let i = 0; i < res.data.details.length; i++) {
          const item = res.data.details[i];
          if (item.city === '江苏') {
            js = item;
            (res.data.details as Array<any>).splice(i, 1);
            break;
          }
        }
        res.data.details = [...[js], ...res.data.details];
        res.data.date = moment(res.data.date).format('YYYY-MM-DD');
        this.oilInfo = res.data;
        console.log(this.oilInfo);
      }
    }, () => {
      LoadingService.close();
      this.loading = false;
    });
  }

}
