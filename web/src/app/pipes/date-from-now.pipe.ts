import {Pipe, PipeTransform} from '@angular/core';
import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/zh-cn';

dayjs.extend(relativeTime);
dayjs.locale('zh-cn');

@Pipe({
  name: 'dateFromNow'
})
export class DateFromNowPipe implements PipeTransform {

  transform(value: string, ...args: string[]): unknown {
    if (value) {
      return dayjs(value).fromNow();
    } else {
      return '-';
    }
  }

}
