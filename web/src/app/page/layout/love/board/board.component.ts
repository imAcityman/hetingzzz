import {Component, OnInit} from '@angular/core';
import {RequestService} from '../../../../service/request.service';
import {CommonParams} from '../../../../util/common-params';
import {LoadingService} from '../../../../component/loading/loading.service';
import {MyStorageService} from '../../../../service/my.storage.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  isWrite = false;
  loading = false;
  me;
  messageList;
  placeholder;
  replyName;
  message = {
    content: '',
    targetuserid: '',
    replyid: '',
  };
  hasMoreData = true;
  refresh = {
    currentState: 'activate',
    drag: false
  };
  pageInfo = {
    pageSize: 20,
    page: 1
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
    this.request.post('/board/leaveMessage', this.message).subscribe((res) => {
      LoadingService.close();
      if (res.code === CommonParams.SUCCESS) {
        this.message.content = '';
        this.hideWrite();
        this.ngOnInit();
        alert(res.msg);
      }
    });
  }

  getMessage(flag: boolean) {
    LoadingService.open();
    this.loading = true;
    if (flag) {
      this.pageInfo.page = 1;
    }
    this.request.get('/board/getBoadMessage', this.pageInfo).subscribe((res) => {
      LoadingService.close();
      this.pageInfo.page++;
      this.loading = false;
      this.hasMoreData = res.data.length >= this.pageInfo.pageSize;
      this.refresh.currentState = !this.hasMoreData ? 'deactivate' : 'activate';
      if (res.isSuccess) {
        this.messageList = flag ? res.data : [...this.messageList, ...res.data];
      }
    }, () => {
      LoadingService.close();
      this.loading = false;
    });
  }

  pageLoad($event) {
    if (this.loading) {
      return;
    }
    if ($event === 'endReachedRefresh' && this.hasMoreData) {
      this.getMessage(false);
    } else if ($event === 'down') {
      this.getMessage(true);
    }
  }

  replyMessage(replyid, replyName, targetuserid?) {
    this.message.content = '';
    this.writeMessage('', replyName, replyid, targetuserid);
  }

  deleteMessage(id) {
    const con = confirm('确定删除这条留言？');
    if (con) {
      this.request.get('/board/deleteMessage', {id: id}).subscribe((res) => {
        LoadingService.close();
        if (res.code === CommonParams.SUCCESS) {
          alert(res.msg);
          this.getMessage(true);
        }
      });
    }
  }

  ngOnInit() {
    this.getMessage(true);
  }

  trackById(obj: any) {
    return obj.id;
  }
}
