import { Injectable } from '@angular/core'
import { Subject }    from 'rxjs/Subject';
import {Comic, ComicStatus} from '../../comic';

@Injectable()
export class ComicStateService {

    currentComic: Comic;//todo (mpm) 11/06/2016 access modifiers
    pageCount: number;

    private currentPageSource = new Subject<number>();
    private comicStatusSource = new Subject<ComicStatus>();
    private pageCountSource = new Subject<number>();

    currentPage$ = this.currentPageSource.asObservable();
    comicStatus$ = this.comicStatusSource.asObservable();
    pageCount$ = this.pageCountSource.asObservable();

    constructor(){}

    /*setCurrentComic(currentComic: Comic){
        this.currentComic = currentComic;
    }*/

    setPageCount(max: number){//todo (mpm) getter/setter
        this.pageCountSource.next(max);
    }

    setCurrentPage(page: number){
        //console.log("setting page to " + page);
        this.currentPageSource.next(page);
    }

    setComicStatus(status: ComicStatus){
        //console.log("New Status: " + status);
        this.comicStatusSource.next(status);
    }

}
