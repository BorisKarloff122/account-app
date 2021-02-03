import {Pipe, PipeTransform} from '@angular/core';
import {HistoryService} from '../services/history.service';
import {ICategory} from '../../../../shared/interface/category';
import {map} from 'rxjs/operators';

@Pipe({
  name: 'corrector'
})

export class CorrectorPipe implements PipeTransform{
  constructor(private historyService: HistoryService){}

  transform(value: number | string, ...args: unknown[]): unknown {
      const catNames: string[] = [];
      return this.historyService.getCategories().pipe(
        map(res => {
          res.forEach((i: ICategory, item: number) => {
            catNames.push(i.name);
          });
          if (typeof value === 'number') {
            return catNames[value - 1];
          } else if (value === 'outcome') {
            return 'Расход';
          } else if (value === 'income') {
            return 'Доход';
          } else {
            return 'Не поддерживаемый тип';
          }
        })
      );
    }
}
