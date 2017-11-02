import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appScroll]',
})
export class ScrollDirective {

  @Input('appScroll') onScroll: Function;
  @Input() threshold: number = 50;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const h = 26533; //document.body.scrollHeight;

    const number =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (this.onScroll && h - number <= this.threshold) {
      this.onScroll(number);
    }
  }

}
