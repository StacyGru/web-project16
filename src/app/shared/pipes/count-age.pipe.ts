import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'countAge'
})
export class CountAgePipe implements PipeTransform {

  transform(date_of_birth: Date)
  {
    return moment().diff(date_of_birth, 'years', false);
  }

}
