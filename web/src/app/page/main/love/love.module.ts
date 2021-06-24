import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoveRoutingModule} from './love-routing.module';
import {LoveComponent} from './love.component';
import {ShareModule} from '../../../module/share/share.module';
import {BigDateComponent} from './big-date/big-date.component';
import {BoardComponent} from './board/board.component';
import {PipesModule} from '../../../pipes/pipes.module';
import { EditBigDateComponent } from './big-date/edit-big-date/edit-big-date.component';
import { WriteBoxComponent } from './board/write-box/write-box.component';
import {PictureWallComponent} from './picture-wall/picture-wall.component';
import {CountdownComponent} from './countdown/countdown.component';


@NgModule({
  declarations: [
    LoveComponent,
    BigDateComponent,
    BoardComponent,
    EditBigDateComponent,
    WriteBoxComponent,
    PictureWallComponent,
    CountdownComponent
  ],
  imports: [
    CommonModule,
    LoveRoutingModule,
    ShareModule,
    PipesModule
  ]
})
export class LoveModule { }
