import { Injectable } from '@angular/core'
import { Subject }    from 'rxjs/Subject';
import {Comic} from "../comic.model";

@Injectable()
export class ComicStateService {

    private currentComic: Comic;

    private currentPageSource = new Subject<number>();

    currentPage$ = this.currentPageSource.asObservable();

    constructor(){}

    setCurrentComic(currentComic: Comic){
        this.currentComic = currentComic;
    }

    setCurrentPage(page: number){
        console.log("setting page to " + page);
        this.currentPageSource.next(page);
    }

}
