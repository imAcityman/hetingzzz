import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzModalModule} from "ng-zorro-antd/modal";


@NgModule({
  exports: [
    NzIconModule,
    NzModalModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule
  ],
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class ShareModule {
}
