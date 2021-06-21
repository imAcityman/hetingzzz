import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormatDatePipe} from './format-date.pipe';
import {DateFromNowPipe} from './date-from-now.pipe';


@NgModule({
  exports: [FormatDatePipe, DateFromNowPipe],
  declarations: [FormatDatePipe, DateFromNowPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule {
}
