import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-oil-price',
  templateUrl: './oil-price.component.html',
  styleUrls: ['./oil-price.component.less']
})
export class OilPriceComponent implements OnInit {
  @Input() latest: number;
  @Input() last: number;

  constructor() {
  }

  ngOnInit(): void {
  }

}
