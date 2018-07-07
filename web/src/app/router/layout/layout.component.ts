import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {


  constructor(private title: Title) {

  }

  ngOnInit() {
    this.title.setTitle('亻可女亭是头犭者');
  }

}
