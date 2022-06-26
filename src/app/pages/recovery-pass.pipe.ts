import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recoveryPass'
})
export class RecoveryPassPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
