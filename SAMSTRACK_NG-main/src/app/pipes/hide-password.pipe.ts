import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hidePassword'
})
export class HidePasswordPipe implements PipeTransform {

  transform(input: string): string {

    let inputSize = input.length;
    let output = '';
    for (let i = 0; i < inputSize; i++) {
      output = output + "*"
    }
    return output;
  }

}
