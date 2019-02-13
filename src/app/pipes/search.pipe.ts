import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) { return []; }
    if (!searchText) { return items; }
    searchText = searchText.toLowerCase();
    const found = items.filter((it) => {
      it = it.week.toString();
      if (it.toLowerCase().includes(searchText)) {
        return true;
      } else {
        return false;
      }
    });

    if (found.length === 0) {
      return [-1];
    }
    return found;
  }
}
