/**
 * Created by Michael on 23/05/2016.
 */
import {Component, OnInit, ElementRef} from "@angular/core";
import {ComicStateService} from "../comic-state/comic-state.service";

@Component({
    selector: 'comic-navigation',
    templateUrl: '/app/comic/comic-navigation/comic-navigation.component.html',
    styleUrls: ['app/comic/comic-navigation/comic-navigation.component.css'],
    providers: [ComicStateService],
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})

export class ComicNavigationComponent {

    menuIsVisible:boolean;
    comicStateService: ComicStateService;

    private _currentPage: number = 0;

    get currentPage() {
        console.log(`getting value for text "${this._currentPage}"`);
        this.comicStateService.currentPage$.subscribe( cp => this._currentPage = cp);
        return this._currentPage;
    }

    set currentPage(value) {
        this.comicStateService.setCurrentPage(value);
        this._currentPage = value;
    }

    constructor(private elementRef: ElementRef, comicStateService: ComicStateService) {
        //this._currentPage = currentPage
        this.comicStateService = comicStateService;
    }

    onMouseEnter() {
        //var t = this.elementRef.nativeElement.children;
        //console.log(t);
        this.menuIsVisible = true;

    }
    onMouseLeave() {
        this.menuIsVisible = false;
    }
}