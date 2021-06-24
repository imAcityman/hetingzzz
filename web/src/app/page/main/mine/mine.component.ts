import {Component, OnInit} from '@angular/core';
import {ModelPersonInfo} from '../../../model/model-person-info';
import {MyStorageService} from '../../../service/my.storage.service';
import {RequestService} from '../../../service/request.service';
import {NavController} from '@ionic/angular';
import {ConstantService} from '../../../service/constant.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.less']
})
export class MineComponent implements OnInit {
  personInfo: ModelPersonInfo = {
    avatar: 'https://up.enterdesk.com/edpic/5b/04/a3/5b04a3b2a9eafbff1cf823260632dd10.jpg',
    id: 0,
    name: '未知',
    sex: 2,
  };

  constructor(private storage: MyStorageService, private navController: NavController, private request: RequestService, private constantService: ConstantService) {

  }

  logout() {
    this.constantService.confirm({
      msg: '确认退出？', okHandler: () => {
        this.storage.delete(MyStorageService.tokenName);
        this.navController.navigateRoot(['login']).then();
      }
    });
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
