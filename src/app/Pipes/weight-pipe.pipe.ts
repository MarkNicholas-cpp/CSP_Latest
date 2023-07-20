import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weight'
})
export class WeightPipePipe implements PipeTransform {

  transform(value: number, weight:String): String {
    return  weight + ' ' + value;
  }

}
