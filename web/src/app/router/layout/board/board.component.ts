import {Component, OnInit} from '@angular/core';
import {RequestService} from '../../../service/request.service';
import {CommonparamService} from '../../../service/commonparam.service';
import {LoadingService} from '../../../component/loading/loading.service';
import {MyStorageService} from '../../../service/my.storage.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  private isWrite = false;
  messageList = [];
  message = {
    content: '',
    targetuserid: ''
  };

  writeMessage() {
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
    this.message.targetuserid = this.storage.getUserId();
    LoadingService.open();
    this.request.post('/user/leaveMessage', this.message).subscribe((res) => {
      LoadingService.close();
      if (res.code === CommonparamService.SUCCESS) {
        this.message.content = '';
        this.hideWrite();
        this.ngOnInit();
        alert(res.msg);
      }
    });
  }

  getMessage(flag: boolean) {
    LoadingService.open();
    this.request.get('/user/getBoadMessage').subscribe((res) => {
      LoadingService.close();
      if (res.code === CommonparamService.SUCCESS) {
        flag ? this.messageList = res.data : this.messageList.push.apply(this.messageList, res.data);
      }
    });
  }

  constructor(private request: RequestService, private storage: MyStorageService) {
  }

  ngOnInit() {
    this.getMessage(true);
  }

}
