import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform
{
  transform(list, sortby: string, reverse:boolean): any[]
  {
    if (sortby === 'byid')
    {
      list.sort(( a, b ) => a.id - b.id);
    }
    else if (sortby === 'byage')
    {
      list.sort(( a, b ) => moment().diff(a.date_of_birth, 'years', false) - moment().diff(b.date_of_birth, 'years', false));
    }

    if (reverse) 
    {
      list.reverse()
    }
      return list;
  }
}