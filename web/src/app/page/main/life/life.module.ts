import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifeRoutingModule } from './life-routing.module';
import { LifeComponent } from './life.component';
import {ShareModule} from '../../../module/share/share.module';


@NgModule({
  declarations: [
    LifeComponent
  ],
  imports: [
    CommonModule,
    LifeRoutingModule,
    ShareModule
  ]
})
export class LifeModule { }
