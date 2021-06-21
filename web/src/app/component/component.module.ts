import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShareModule} from '../module/share/share.module';
import {NavBarComponent} from './nav-bar/nav-bar.component';


@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    ShareModule,
  ],
  exports: [NavBarComponent]
})
export class ComponentModule {
}
