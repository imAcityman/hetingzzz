import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-love',
  templateUrl: './love.component.html',
  styleUrls: ['./love.component.css']
})
export class LoveComponent implements OnInit {
  selectedIndex = 0;
  bigDateInit = false;
  boardInit = false;
  pictureWallInit = false;
  weddingInit = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.pageChange(0);
  }

  pageChange(index: number) {
    switch (index) {
      case 0:
        this.bigDateInit = true;
        break;
      case 1:
        this.boardInit = true;
        break;
      case 2:
        this.pictureWallInit = true;
        break;
      case 3:
        this.weddingInit = true;
        break;
    }
  }

  tabBarTabOnPress({index}) {
    this.pageChange(index);
  }
}
