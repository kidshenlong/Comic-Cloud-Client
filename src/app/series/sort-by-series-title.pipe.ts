import { Pipe, PipeTransform } from '@angular/core';
import {Series} from "./series";

/*
 * Sort an Array of Series by their title property
 * Takes a Series array argument.
 * Usage:
 *   Series  | sortBySeriesTitlePipe
 * Example:
 *   {{ let thisSeries of series |  sortBySeriesTitlePipe}}
 */

@Pipe({
  name: 'sortBySeriesTitlePipe',
  pure: false
})
export class SortBySeriesTitlePipe implements PipeTransform {

  transform(array: Array<Series>, args: string): Array<Series> {
    console.log("before:");
    console.log(array);
    array.sort((a: Series, b: Series) => {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      } else {
        return 0;
      }
    });
    console.log("after:");
    console.log(array);
    return array;
  }
}
