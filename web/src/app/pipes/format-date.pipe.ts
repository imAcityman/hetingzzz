import {Pipe, PipeTransform} from '@angular/core';
import * as dayjs from 'dayjs';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(value: string, ...args: string[]): unknown {
    if (!value) {
      return '';
    }
    return dayjs(value).format(args[0]);
  }

}
