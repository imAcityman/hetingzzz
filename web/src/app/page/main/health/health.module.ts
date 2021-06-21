import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthRoutingModule } from './health-routing.module';
import { HealthComponent } from './health.component';
import {PipesModule} from '../../../pipes/pipes.module';
import {ShareModule} from '../../../module/share/share.module';
import {ComponentModule} from '../../../component/component.module';


@NgModule({
  declarations: [
    HealthComponent
  ],
  imports: [
    CommonModule,
    HealthRoutingModule,
    PipesModule,
    ShareModule,
    ComponentModule
  ]
})
export class HealthModule { }
