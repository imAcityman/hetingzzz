import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {MessageService} from '../../service/message.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  hide = false;

  constructor(private title: Title, private messageService: MessageService) {
    messageService.getMessage().subscribe((res) => {
      this.hide = res;
    });
  }


  ngOnInit() {
    this.title.setTitle('亻可女亭是头犭者');
  }

}
