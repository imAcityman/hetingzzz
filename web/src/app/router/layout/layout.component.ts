import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {MessageService} from '../../service/message.service';
import {CommonparamService} from '../../util/commonparam.service';
import {NavigationEnd, Router} from '@angular/router';
import {animate, group, query, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  animations: [trigger('routeAnimation', [
    transition('* => *', [
      query(':leave', style({position: 'absolute', width: '100%', height: '100%'}), {optional: true}),
      query(':enter', style({position: 'absolute', width: '100%', height: '100%', transform: 'translateX(100%)'}), {optional: true}),

      group([
        query(':leave', animate('.3s ease-in-out', style({transform: 'translateX(-100%)'})), {optional: true}),
        query(':enter', animate('.3s ease-in-out', style({transform: 'translateX(0)', 'z-index': 2})), {optional: true})
      ])
    ])
  ])]
})
export class LayoutComponent implements OnInit {

  TOP = false;
  BOTTOM = false;
  routerState = true;
  routerStateCode = 'active';

  constructor(private title: Title, private messageService: MessageService, private router: Router) {
    messageService.getMessage().subscribe((res) => {
      if (res.type === CommonparamService.HIDE_MENU) {
        this[res.body.menu_type] = res.body.flag;
      }
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // 每次路由跳转改变状态
        this.routerState = !this.routerState;
        this.routerStateCode = this.routerState ? 'active' : 'inactive';
      }
    });
  }


  ngOnInit() {
    this.title.setTitle('亻可女亭是头犭者');
  }

}
