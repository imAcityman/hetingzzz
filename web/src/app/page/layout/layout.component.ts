import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {
  selectedIndex = 1;
  menstruationInit = false;
  loveInit = false;
  lifeInit = false;
  mimeInit = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    activatedRoute.paramMap.subscribe(({params}: any) => {
      this.pageChange(params.zoneType);
    });
  }

  ngOnInit(): void {
  }

  pageChange(zoneType: string) {
    switch (zoneType) {
      case 'health':
        this.selectedIndex = 0;
        this.menstruationInit = true;
        break;
      case 'love':
        this.selectedIndex = 1;
        this.loveInit = true;
        break;
      case 'life':
        this.selectedIndex = 2;
        this.lifeInit = true;
        break;
      case 'mime':
        this.selectedIndex = 3;
        this.mimeInit = true;
        break;
    }
  }

  getPageTab(key) {
    let tabName = '';
    switch (key) {
      case 'love':
        tabName = 'bigDate';
        break;
      case 'life':
        tabName = 'oil';
        break;
    }
    return tabName;
  }

  tabBarTabOnPress(pressParam: any) {
    this.router.navigate(['zone', pressParam.key, this.getPageTab(pressParam.key)]);
  }

}

