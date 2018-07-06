import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private i: number;

  constructor(private router: Router) {
  }

  login() {
    // this.router.navigate(['layout']);
    switch (this.i) {
      case 1:
        alert('点的力气不够大，再点一次');
        break;
      case 2:
        alert('还是不够大，再点');
        break;
      case 3:
        alert('傻逼，让你点就点啊，哈哈哈哈哈！');
        break;
      default:
        alert('别点了弱智');
    }
    this.i++;
  }

  ngOnInit() {
    this.i = 1;
  }

}
