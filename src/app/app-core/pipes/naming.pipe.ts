import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'naming'
})
export class NamingPipe implements PipeTransform {
  private ext: string = '.jpg';

  transform(value: unknown, ...args: unknown[]): unknown {
      return `${value}${this.rand()}${this.ext}`;
  }

  private rand(): number {
    return Math.floor(Math.random() * (Math.floor(4) - Math.ceil(1) + 1)) + Math.ceil(1);
  }
}
