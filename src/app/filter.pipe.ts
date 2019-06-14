import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterWord: string, filterProp: string) {
    let resultsList= [];

    if (filterWord === '' || !filterWord) {
      for (let i of value) {
        resultsList.push(i);
      }
      return resultsList;
    } else {
      filterWord = filterWord.trim();
      for (let i of value) {
        if (i[filterProp].includes(filterWord)) {
          resultsList.push(i);
        }
      }
      return resultsList;
    }
  }

}
