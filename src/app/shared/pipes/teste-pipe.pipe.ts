import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testePipe'
})
export class TestePipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return "xyz";
  }

}
