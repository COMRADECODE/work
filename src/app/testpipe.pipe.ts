import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
@Pipe({
  name: 'testpipe'
})
export class TestpipePipe implements PipeTransform {

  constructor(private datePipe: DatePipe) {}

  transform(value: any, format: string = 'MM/dd/yyyy'): any {
    if (value) {
      return this.datePipe.transform(value, format);
    }
    return null;
  }

}
