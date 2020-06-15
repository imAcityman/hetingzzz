import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit {
  selectedIndex;
  oilInit = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    activatedRoute.children[0].params.subscribe((param: any) => {
      this.pageChange(param.tabType);
    });
  }

  ngOnInit(): void {
  }

  pageChange(tabType: string) {
    switch (tabType) {
      case 'oil':
        this.selectedIndex = 0;
        this.oilInit = true;
        break;
    }
  }

  getPageName(index: number) {
    let name;
    switch (index) {
      case 0:
        name = 'oil';
        break;
    }
    return name;
  }

  tabBarTabOnPress({index}) {
    this.router.navigate(['zone', 'life', this.getPageName(index)]);
  }
}
