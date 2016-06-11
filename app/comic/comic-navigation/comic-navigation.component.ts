/**
 * Created by Michael on 23/05/2016.
 */
import {Component, OnInit, ElementRef} from "@angular/core";
import {ComicStateService} from "../comic-state/comic-state.service";
import {ComicStatusType} from "../comic-status/comic-status.type";

@Component({
    selector: 'comic-navigation',
    templateUrl: '/app/comic/comic-navigation/comic-navigation.component.html',
    styleUrls: ['app/comic/comic-navigation/comic-navigation.component.css'],
    providers: [],
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})

export class ComicNavigationComponent {

    menuIsVisible:boolean;
    //comicStateService: ComicStateService;

    private _currentPage: number = 0;

    get currentPage() {
        console.log(`[comic-navigation.component]getting value for text "${this._currentPage}"`);
        return this._currentPage;
    }

    set currentPage(value) {
        this.comicStateService.setCurrentPage(value);
        this._currentPage = value;
    }

    constructor(private elementRef: ElementRef, private comicStateService: ComicStateService) {
        //this._currentPage = currentPage
        //this.comicStateService = comicStateService;
        this.comicStateService.currentPage$.subscribe( cp => this._currentPage = cp);
    }

    onMouseEnter() {
        //var t = this.elementRef.nativeElement.children;
        //console.log(t);
        this.menuIsVisible = true; //todo (mpm) 11/06/2016 access should probably be through a method
    }
    onMouseLeave() {
        this.menuIsVisible = false;
    }
}