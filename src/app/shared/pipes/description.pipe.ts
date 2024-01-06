import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'description',
  standalone: true,
})
export class DescriptionPipe implements PipeTransform {
  transform(value: string, ...args: any): unknown {
    if (value.length <= args) return value;
    else return `${value.substring(0, args)}...`;
  }
}
