import { Injectable } from '@angular/core'
import { Subject }    from 'rxjs/Subject';
import {Comic} from "../comic.model";
import {ComicStatusType} from "../comic-status/comic-status.type";

@Injectable()
export class ComicStateService {

    private currentComic: Comic;

    private currentPageSource = new Subject<number>();

    private comicStatusSource = new Subject<ComicStatusType>();

    currentPage$ = this.currentPageSource.asObservable();
    comicStatus$ = this.comicStatusSource.asObservable();

    constructor(){}

    setCurrentComic(currentComic: Comic){
        this.currentComic = currentComic;
    }

    setCurrentPage(page: number){
        console.log("setting page to " + page);
        this.currentPageSource.next(page);
    }

    setComicStatus(status: ComicStatusType){
        console.log("New Status: " + status);
        this.comicStatusSource.next(status);
    }

}
