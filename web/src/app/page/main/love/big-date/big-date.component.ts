import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {RequestService} from '../../../../service/request.service';
import {ModalController} from '@ionic/angular';
import {ConstantService} from '../../../../service/constant.service';
import {EditBigDateComponent} from './edit-big-date/edit-big-date.component';
import {ModelBigDate} from '../../../../model/model-big-date';
import {CommonParams} from '../../../../config/common-params';

@Component({
  selector: 'app-big-date',
  templateUrl: './big-date.component.html',
  styleUrls: ['./big-date.component.less']
})
export class BigDateComponent implements OnInit {

  refresherText = CommonParams.REFRESHER_TEXT;
  @ViewChild('modal1') modal1: TemplateRef<any>;
  dates: Array<ModelBigDate>;

  constructor(private modalController: ModalController, private constantService: ConstantService, private request: RequestService) {
  }

  ngOnInit() {
    this.getBigDate();
  }

  getBigDate() {
    return new Promise<void>(resolve => {
      this.request.get('/bigdate/getBigDate').subscribe(res => {
        if (res.isSuccess) {
          this.dates = res.data;
        }
        resolve();
      }, error => {
        resolve();
      });
    });
  }

  async showUpdate(bigDate?: ModelBigDate) {
    const modal = await this.modalController.create({
      component: EditBigDateComponent,
      cssClass: 'modal-half-bottom',
      componentProps: {bigDate}
    });
    modal.onWillDismiss().then(data => {
      if (data) {
        this.getBigDate().then();
      }
    });
    return await modal.present();
  }

  doRefresh(event): void {
    this.getBigDate().then(() => {
      event.target.complete();
    });
  }
}
