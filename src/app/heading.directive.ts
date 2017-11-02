import { Directive, Host } from '@angular/core';

@Directive({
  selector: '[appHeading]',
  host: {
    class: 'athelas lh-title red',
  },
})
export class HeadingDirective {

  constructor() { }

}
