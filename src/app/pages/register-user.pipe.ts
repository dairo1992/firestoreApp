import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'registerUSer'
})
export class RegisterUSerPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
