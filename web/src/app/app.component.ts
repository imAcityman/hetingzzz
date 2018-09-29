import {Component, OnInit} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {MyStorageService} from './service/my.storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private storage: MyStorageService) {

  }

  ngOnInit(): void {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) { // 开始切路由
          this.storage.setPreRouter(event.url);
        }
        if (event instanceof NavigationEnd) { // 路由切换结束
          this.storage.setAfterRouter(event.url);
        }
      });
  }

}
