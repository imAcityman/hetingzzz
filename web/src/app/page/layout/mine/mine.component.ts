import {Component, OnInit} from '@angular/core';
import {MyStorageService} from '../../../service/my.storage.service';
import {Router} from '@angular/router';
import {PersonInfo} from '../../../model/PersonInfo';
import {RequestService} from '../../../service/request.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.less']
})
export class MineComponent implements OnInit {
  personInfo: PersonInfo = {
    avatar: 'https://up.enterdesk.com/edpic/5b/04/a3/5b04a3b2a9eafbff1cf823260632dd10.jpg',
    id: 0,
    name: '未知',
    sex: 2,
  };

  constructor(private storage: MyStorageService, private router: Router, private request: RequestService) {

  }

  logout() {
    this.storage.delete(MyStorageService.tokenName);
    this.router.navigate(['login']);
  }

  getMyInfo() {
    this.request.get('/mime/getUserInfo').subscribe(res => {
      if (res.isSuccess) {
        this.personInfo = res.data;
      }
    });
  }

  ngOnInit() {
    this.getMyInfo();
  }

}
