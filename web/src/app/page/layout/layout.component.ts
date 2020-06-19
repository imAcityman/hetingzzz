import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {
  selectedIndex = 0;
  menstruationInit = false;
  loveInit = false;
  lifeInit = false;
  mimeInit = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.pageChange('health');
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

  tabBarTabOnPress(pressParam: any) {
    this.pageChange(pressParam.key);
  }

}
