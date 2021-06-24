import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture-wall',
  templateUrl: './picture-wall.component.html',
  styleUrls: ['./picture-wall.component.css']
})
export class PictureWallComponent implements OnInit {

  slideOptsNotice = {
    speed: 400,
    loop: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    }
  };
  images: Array<string> = [];

  constructor() {
    for (let i = 1; i <= 10; i++) {
      this.images.push(`../../../../../assets/image/coundown/img${i}.jpg`);
    }
  }

  ngOnInit() {
  }

}
