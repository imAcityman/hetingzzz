import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NzButtonModule, NzFormModule, NzIconModule, NzInputModule, NzModalModule} from 'ng-zorro-antd';


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
    NzIconModule,
    NzModalModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule
  ]
})
export class ShareModule {
}
