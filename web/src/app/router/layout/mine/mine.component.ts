import {Component, OnInit} from '@angular/core';
import {MyStorageService} from '../../../service/my.storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {

  constructor(private storage: MyStorageService,private router: Router) {
  }

  logout() {
    this.storage.setToken('');
    this.storage.setUserId('');
    this.router.navigate(['login']);
  }

  ngOnInit() {
  }

}
