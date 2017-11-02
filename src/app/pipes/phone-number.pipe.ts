import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  phoneNumber: string;

  transform(value: any, country?: string): any {
    const formattedNumber = (
      `(${value.substring(0, 3)}) ${value.substring(3, 6)}-${value.substring(6, 10)}`
    );
    return formattedNumber;
  }

}
