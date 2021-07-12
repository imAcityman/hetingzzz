import {Component, OnInit} from '@angular/core';
import {RequestService} from '../../../../service/request.service';
import {CommonParams} from '../../../../config/common-params';
import {MyStorageService} from '../../../../service/my.storage.service';
import {QueryPage} from '../../../../model/query-page';
import {ConstantService} from '../../../../service/constant.service';
import {WriteBoxComponent} from './write-box/write-box.component';
import {ModalController} from '@ionic/angular';
import {ModelMessage} from '../../../../model/model-message';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  init = false;
  queryPage = new QueryPage<ModelMessage>(1, 20);
  refresherText = CommonParams.REFRESHER_TEXT;
  loading = false;
  me;

  constructor(private request: RequestService, private storage: MyStorageService, private constantService: ConstantService,
              private modalController: ModalController) {
    this.me = this.storage.getUserId();
  }

  search(page?: number) {
    return new Promise<void>(async (resolve, reject) => {
      let loadingModal;
      if (!this.init) {
        loadingModal = await this.constantService.loading();
      }
      this.queryPage.loading = true;
      this.queryPage.setPage(page);
      this.request.get('/board/getBoadMessage', this.queryPage.params).subscribe(res => {
        this.queryPage.setResponse(res, page !== 1);
        this.queryPage.loading = false;
        resolve();
        loadingModal?.dismiss().then();
        this.init = true;
      }, error => {
        this.queryPage.loading = false;
        resolve();
        loadingModal?.dismiss().then();
      });
    });
  }

  deleteMessage(id) {
    this.constantService.confirm({
      msg: '确定删除这条留言？', okHandler: async () => {
        const loadingModal = await this.constantService.loading();
        this.request.get('/board/deleteMessage', {id: id}).subscribe((res) => {
          if (res.isSuccess) {
            this.search(1).then();
          }
          loadingModal?.dismiss().then();
        }, error => {
          loadingModal?.dismiss().then();
        });
      }
    });
  }

  ngOnInit() {
    this.search(1).then();
  }

  trackById(obj: any) {
    return obj.id;
  }

  doRefresh(event): void {
    this.queryPage.hasData = true;
    this.search(1).then(() => {
      event.target.complete();
    });
  }

  loadData(event): void {
    this.search().then(() => {
      event.target.complete();
    });
  }

  async writeMessage(targetuserid?: number, replyid?: number, replyName?: string) {
    const replay = {targetuserid, replyid, replyName};
    const modal = await this.modalController.create({
      component: WriteBoxComponent,
      cssClass: 'modal-1of3-bottom',
      componentProps: {replay},
      swipeToClose: true
    });
    modal.onWillDismiss().then(({data}) => {
      if (data) {
        this.search(1).then();
      }
    });
    return await modal.present();
  }
}
