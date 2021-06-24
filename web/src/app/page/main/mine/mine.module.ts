import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MineRoutingModule } from './mine-routing.module';
import { MineComponent } from './mine.component';
import {ComponentModule} from '../../../component/component.module';
import {ShareModule} from '../../../module/share/share.module';


@NgModule({
  declarations: [
    MineComponent
  ],
  imports: [
    CommonModule,
    MineRoutingModule,
    ComponentModule,
    ShareModule
  ]
})
export class MineModule { }
