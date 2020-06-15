import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-love',
  templateUrl: './love.component.html',
  styleUrls: ['./love.component.css']
})
export class LoveComponent implements OnInit {
  selectedIndex;
  bigDateInit = false;
  boardInit = false;
  pictureWallInit = false;
  weddingInit = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    activatedRoute.children[0].params.subscribe((param: any) => {
      this.pageChange(param.tabType);
    });
  }

  ngOnInit(): void {
  }

  pageChange(tabType: string) {
    switch (tabType) {
      case 'bigDate':
        this.selectedIndex = 0;
        this.bigDateInit = true;
        break;
      case 'board':
        this.selectedIndex = 1;
        this.boardInit = true;
        break;
      case 'photo':
        this.selectedIndex = 2;
        this.pictureWallInit = true;
        break;
      case 'countdown':
        this.selectedIndex = 3;
        this.weddingInit = true;
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
    this.router.navigate(['zone', 'love', this.getPageName(index)]);
  }
}
