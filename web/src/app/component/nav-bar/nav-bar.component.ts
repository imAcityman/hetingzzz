import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {InputBoolean} from "ng-zorro-antd/core/util";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent implements OnInit {

  @Input() @InputBoolean() color: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

}
