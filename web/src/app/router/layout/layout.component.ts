import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {MessageService} from '../../service/message.service';
import {CommonparamService} from '../../util/commonparam.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  TOP = false;
  BOTTOM = false;

  constructor(private title: Title, private messageService: MessageService) {
    messageService.getMessage().subscribe((res) => {
      if (res.type === CommonparamService.HIDE_MENU) {
        this[res.body.menu_type] = res.body.flag;
      }
    });
  }


  ngOnInit() {
    this.title.setTitle('亻可女亭是头犭者');
  }

}
