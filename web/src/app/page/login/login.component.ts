import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MyStorageService} from '../../service/my.storage.service';
import {RequestService} from '../../service/request.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConstantService} from '../../service/constant.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router, private storage: MyStorageService, private request: RequestService, private fb: FormBuilder,
              private constantService: ConstantService) {
    this.loginForm = this.fb.group({
      loginid: [this.storage.get('loginid') || null, [Validators.required]],
      password: [this.storage.get('password') || null, [Validators.required]]
    });
  }

  async login(): Promise<void> {
    const loadingModal = await this.constantService.loading();
    this.request.post('/auth/login', this.loginForm.value).subscribe((data) => {
      loadingModal?.dismiss().then();
      if (data.isSuccess) {
        this.storage.set('loginid', this.loginForm.value.loginid);
        this.storage.set('password', this.loginForm.value.password);
        this.storage.setToken(data.data.token);
        this.storage.setUserId(data.data.userid);
        this.router.navigate(['main']);
      } else {
        this.constantService.messageError(data.msg).then();
      }
    }, () => {
      loadingModal?.dismiss().then();
    });
  }

  async autoLogin() {
    const loadingModal = await this.constantService.loading('自动登录');
    this.request.post('/auth/autoLogin').subscribe((data) => {
      if (data.isSuccess) {
        setTimeout(() => {
          this.router.navigate(['main']).then();
        }, 1000);
      } else {
        this.constantService.messageError(data.msg);
      }
      loadingModal?.dismiss().then();
    });
  }

  ngOnInit() {
    if (this.storage.getToken()) {
      this.autoLogin().then();
    }
  }

}
