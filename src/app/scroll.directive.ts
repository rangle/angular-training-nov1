import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appScroll]',
})
export class ScrollDirective {

  @Input('appScroll') onScroll: Function;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (this.onScroll) {
      this.onScroll(number);
    }
  }

}
