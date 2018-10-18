import {Component, OnInit} from '@angular/core';
import {RequestService} from '../../../service/request.service';
import {CommonparamService} from '../../../util/commonparam.service';
import {LoadingService} from '../../../component/loading/loading.service';
import {MyStorageService} from '../../../service/my.storage.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  isWrite = false;
  me;
  messageList;
  placeholder;
  replyName;
  message = {
    content: '',
    targetuserid: '',
    replyid: '',
  };

  constructor(private request: RequestService, private storage: MyStorageService) {
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

  replyMessage(replyid, replyName, targetuserid?) {
    this.message.content = '';
    this.writeMessage('', replyName, replyid, targetuserid);
  }

  deleteMessage(id) {
    const con = confirm('确定删除这条留言？');
    if (con) {
      this.request.get('/user/deleteMessage', {id: id}).subscribe((res) => {
        LoadingService.close();
        if (res.code === CommonparamService.SUCCESS) {
          alert(res.msg);
          this.getMessage(true);
        }
      });
    }
  }

  ngOnInit() {
    this.getMessage(true);
  }

}
