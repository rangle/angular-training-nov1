import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'excerpt'
})
export class ExcerptPipe implements PipeTransform {

  transform(
    value: any,
    wordCount: number = 20,
    specialChar?:string
  ): any {

    const excertpValue = value.split(' ')
      .slice(0, wordCount)
      .concat('…')
      .join(' ');

    if (specialChar) {
      const stripRegex = new RegExp(specialChar, 'ig');
      return excertpValue.replace(stripRegex, '');
    }

    return excertpValue;
  }

}
