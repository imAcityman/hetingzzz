import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-love',
  templateUrl: './love.component.html',
  styleUrls: ['./love.component.css']
})
export class LoveComponent implements OnInit {
  selectedIndex = 0;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    activatedRoute.paramMap.subscribe(({params}: any) => {
      console.log(params);
      this.pageChange(params.tabType);

    });
  }

  ngOnInit(): void {
  }

  pageChange(tabType: string) {
    switch (tabType) {
      case 'bigDate':
        this.selectedIndex = 0;
        break;
      case 'board':
        this.selectedIndex = 1;
        break;
      case 'photo':
        this.selectedIndex = 2;
        break;
      case 'countdown':
        this.selectedIndex = 2;
        break;
    }
  }

  getPageName(index: number) {
    let name;
    switch (index) {
      case 0:
        name = 'bigDate';
        break;
      case 1:
        name = 'board';
        break;
      case 2:
        name = 'photo';
        break;
      case 3:
        name = 'countdown';
        break;
    }
    return name;
  }

  tabBarTabOnPress({index}) {
    console.log(['zone', 'love', this.getPageName(index)])
    this.router.navigate(['zone', 'love', this.getPageName(index)]);
  }
}
