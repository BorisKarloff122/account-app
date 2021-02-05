import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'corrector'
})

export class CorrectorPipe implements PipeTransform{

  transform(value: number | string, catNames: string[]): unknown {
    if (typeof value === 'number') {
      return catNames[value - 1];
    } else if (value === 'outcome') {
      return 'Расход';
    } else if (value === 'income') {
      return 'Доход';
    } else {
      return 'Не поддерживаемый тип';
    }
  }
}
