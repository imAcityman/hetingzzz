import {Component, OnInit} from '@angular/core';
import {LoadingService} from '../../../../component/loading/loading.service';
import {RequestService} from '../../../../service/request.service';
import {MyStorageService} from '../../../../service/my.storage.service';
import * as moment from 'moment';

@Component({
  selector: 'app-oil',
  templateUrl: './oil.component.html',
  styleUrls: ['./oil.component.less']
})
export class OilComponent implements OnInit {
  loading = false;
  oilInfo: any = {};
  updateTime = null;

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
        this.buildData(res.data);
      }
    }, () => {
      LoadingService.close();
      this.loading = false;
    });
  }

  buildData(data) {
    if (data) {
      // 数据不够则手动补全
      if (data.length <= 1) {
        data.push(Object.assign({}, data[0]));
      }
      const updateTime = moment(data[0].date * 1000).toDate().getTime();
      this.updateTime = updateTime;
      this.myStorageService.oilUpdateTime = updateTime;
      // 将江苏信息排头
      let newJs;
      let oldJs;
      let jsIndex;
      const newOil = data[0];
      const oldOil = data[1];

      for (let i = 0; i < newOil.details.length; i++) {
        const newItem = newOil.details[i];
        const oldItem = oldOil.details[i];

        newItem.oldqy92 = oldItem.qy92;
        newItem.oldqy95 = oldItem.qy95;
        newItem.oldqy98 = oldItem.qy98;
        newItem.oldqy89 = oldItem.qy89;
        newItem.oldcy0 = oldItem.cy0;

        if (newItem.city === '江苏') {
          newJs = newItem;
          oldJs = oldItem;
          jsIndex = i;
        }
      }
      (newOil.details as Array<any>).splice(jsIndex, 1);
      (oldOil.details as Array<any>).splice(jsIndex, 1);
      newOil.details = [...[newJs], ...newOil.details];
      console.log(newOil);
      this.oilInfo = newOil;
    }
  }

}
