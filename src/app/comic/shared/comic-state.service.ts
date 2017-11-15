import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ComicStateService {

  private currentPageSource = new Subject<number>();

  currentPage$ = this.currentPageSource.asObservable();

  // Service message commands
  setPage(page: number) {
    this.currentPageSource.next(page);
  }
}
