import {Pipe, PipeTransform} from '@angular/core';
import {HistoryService} from '../services/history.service';

@Pipe({
  name: 'corrector'
})
export class CorrectorPipe implements PipeTransform {
  constructor(private historyService: HistoryService){}

  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case (1):
        return 'Дом';
      case (2):
        return 'Еда';
      case (3):
        return 'Машина';
      case ('outcome'):
        return 'Расход';
      case ('income'):
        return 'Доход';
    }
  }
}
