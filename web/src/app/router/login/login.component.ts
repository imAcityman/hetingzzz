import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MyStorageService} from '../../service/my.storage.service';
import {RequestService} from '../../service/request.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router, private storage: MyStorageService, private request: RequestService, private fb: FormBuilder) {
  }

  createForm() {
    this.loginForm = this.fb.group({
      loginid: [this.storage.get('loginid'), [Validators.required]],
      password: [this.storage.get('password'), [Validators.required]]
    });
  }

  login() {
    this.request.post('/auth/login', this.loginForm.value).subscribe((data) => {
      if (data.code === 1) {
        this.storage.set('loginid', this.loginForm.value.loginid);
        this.storage.set('password', this.loginForm.value.password);
        this.storage.set('token', data.data.token);
        this.storage.set('userid', data.data.userid);
        this.router.navigate(['layout']);
      } else {
        alert(data.msg);
      }
    });
  }

  ngOnInit() {
    this.createForm();
  }

}
