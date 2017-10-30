import { Directive } from '@angular/core';

@Directive({
  selector: '[appText]',
  host: {
    class: 'lh-copy athelas dark-gray'
  },
})
export class TextDirective {

  constructor() { }

}
