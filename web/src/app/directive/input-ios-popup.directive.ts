import {Directive, HostListener} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'input[type=text]'
})
export class InputIosPopupDirective {

  timer;
  constructor() {
  }

  @HostListener('focus') focus() {
    clearTimeout(this.timer);
  }

  @HostListener('blur') blur() {
    this.timer = setTimeout(() => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }, 100);
  }
}
