import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit {
  selectedIndex = 0;
  oilInit = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.pageChange(0);
  }

  pageChange(index: number) {
    switch (index) {
      case 0:
        this.oilInit = true;
        break;
    }
  }

  tabBarTabOnPress({index}) {
    this.pageChange(index);
  }
}
