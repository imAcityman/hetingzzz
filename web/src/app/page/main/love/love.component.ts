import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-love',
  templateUrl: './love.component.html',
  styleUrls: ['./love.component.less']
})
export class LoveComponent implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit(): void {
    this.navController.navigateForward('/main/love/big-date').then();
  }

}
