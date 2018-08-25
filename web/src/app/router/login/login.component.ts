import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MyStorageServiceService} from '../../service/my.storage.service.service';
import {RequestService} from '../../service/request.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user;

  constructor(private router: Router, private storage: MyStorageServiceService, private request: RequestService) {

  }

  login() {
    this.request.post('/user/login', this.user).subscribe((data) => {
      if (data.code === 1) {
        this.storage.set('loginid', this.user.loginid);
        this.storage.set('password', this.user.password);
        this.router.navigate(['layout']);
      }
    });
  }

  ngOnInit() {
    this.user = {
      loginid: this.storage.get('loginid'),
      password: this.storage.get('password')
    };
  }

}
