import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifeRoutingModule } from './life-routing.module';
import { LifeComponent } from './life.component';
import {ShareModule} from '../../../module/share/share.module';
import {OilComponent} from './oil/oil.component';
import {OilPriceComponent} from './oil/oil-price/oil-price.component';
import {PipesModule} from '../../../pipes/pipes.module';


@NgModule({
  declarations: [
    LifeComponent,
    OilComponent,
    OilPriceComponent
  ],
  imports: [
    CommonModule,
    LifeRoutingModule,
    ShareModule,
    PipesModule
  ]
})
export class LifeModule { }
