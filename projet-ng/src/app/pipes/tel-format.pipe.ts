import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telFormat'
})
export class TelFormatPipe implements PipeTransform {

  transform(value: string): string {
    const substr = value.substring(1);
    return "+33 "+substr.replace(/\s/g, '');
  }

}
