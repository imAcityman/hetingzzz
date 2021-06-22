import {Component, OnInit} from '@angular/core';
import {RequestService} from '../../../../service/request.service';
import {CommonParams} from '../../../../config/common-params';
import {LoadingService} from '../../../../component/loading/loading.service';
import {MyStorageService} from '../../../../service/my.storage.service';
import {QueryPage} from '../../../../model/query-page';
import {ConstantService} from '../../../../service/constant.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  queryPage = new QueryPage<any>(1, 20);
  refresherText = CommonParams.REFRESHER_TEXT;
  isWrite = false;
  loading = false;
  me;
  placeholder;
  replyName;
  message = {
    content: '',
    targetuserid: '',
    replyid: '',
  };

  constructor(private request: RequestService, private storage: MyStorageService, private constantService: ConstantService) {
    this.me = this.storage.getUserId();
  }

  writeMessage(placeholder?, replyName?, replyid?, targetuserid?) {
    if (placeholder) {
      this.placeholder = placeholder;
    } else {
      this.placeholder = '';
    }
    this.message.replyid = replyid || '';
    this.message.targetuserid = targetuserid || '';
    this.replyName = replyName || '';
    this.isWrite = true;
  }

  hideWrite() {
    this.isWrite = false;
  }

  submit() {
    if (!this.message.content) {
      alert('请输入留言内容');
      return;
    }

    this.request.post('/board/leaveMessage', this.message).subscribe((res) => {

      if (res.isSuccess) {
        this.message.content = '';
        this.hideWrite();
        this.ngOnInit();
        alert(res.msg);
      }
    });
  }

  search(page?: number) {
    return new Promise<void>(async (resolve, reject) => {
      this.queryPage.loading = true;
      this.queryPage.setPage(page);
      this.request.get('/board/getBoadMessage', this.queryPage.params).subscribe(res => {
        this.queryPage.setResponse(res, page !== 1);
        this.queryPage.loading = false;
        resolve();
      }, error => {
        this.queryPage.loading = false;
        resolve();
      });
    });
  }

  replyMessage(replyid, replyName, targetuserid?) {
    this.message.content = '';
    this.writeMessage('', replyName, replyid, targetuserid);
  }

  deleteMessage(id) {
    const con = confirm('确定删除这条留言？');
    if (con) {
      this.request.get('/board/deleteMessage', {id: id}).subscribe((res) => {
        if (res.isSuccess) {
          alert(res.msg);
          this.search(1).then();
        }
      });
    }
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
    console.log(1);
    this.search().then(() => {
      event.target.complete();
    });
  }
}
