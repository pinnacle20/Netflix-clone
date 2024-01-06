import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image',
  standalone: true,
})
export class ImagePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face/${value}`;
  }
}
