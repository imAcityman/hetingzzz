import {Component, OnInit} from '@angular/core';
import {animate, group, query, style, transition, trigger} from '@angular/animations';
import {ActivatedRoute, Router} from '@angular/router';

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
  selectedIndex = 1;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    activatedRoute.paramMap.subscribe(({params}: any) => {
      this.pageChange(params.zoneType);
    });
  }

  pageChange(zoneType: string) {
    switch (zoneType) {
      case 'health':
        this.selectedIndex = 0;
        break;
      case 'love':
        this.selectedIndex = 1;
        break;
      case 'mime':
        this.selectedIndex = 2;
        break;
    }
  }

  tabBarTabOnPress(pressParam: any) {
    this.router.navigate(['zone', pressParam.key]);
  }

  ngOnInit(): void {
  }
}
