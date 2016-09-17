import {Component, OnInit, ElementRef} from "@angular/core";
import {ComicStateService} from "../comic-state/comic-state.service";

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
    hidden = true;
    //comicStateService: ComicStateService;
    private _pageCount: number = 0;

    private _currentPage: number = 0;

    get currentPage() {
        //console.log(`[comic-navigation.component]getting value for text "${this._currentPage}"`);
        return this._currentPage;
    }

    set currentPage(value) {
        this.comicStateService.setCurrentPage(value);
        this._currentPage = value;
    }

    get pageCount(){
        return this._pageCount;
    }

    constructor(private elementRef: ElementRef, private comicStateService: ComicStateService) {
        //this._currentPage = currentPage
        //this.comicStateService = comicStateService;
        this.comicStateService.currentPage$.subscribe( cp => this._currentPage = cp);
        //this.pageCount =  this.comicStateService.pageCount
        this.comicStateService.pageCount$.subscribe(pc => this._pageCount = pc);

    }

    onMouseEnter() {
        //var t = this.elementRef.nativeElement.children;
        //console.log(t);
        //this.menuIsVisible = true; //todo (mpm) 11/06/2016 access should probably be through a method
        this.hidden = false; //todo (mpm) 11/06/2016 access should probably be through a method
        //this.elementRef.nativeElement.firstChild.firstChild.focus();
        //Added setTimeout in line with issuesd seen here http://stackoverflow.com/questions/1096436/document-getelementbyidid-focus-is-not-working-for-firefox-or-chrome
        //todo (mpm) 11/06/2016 revisit as keyboard may already be able to change page.
        setTimeout(() => this.elementRef.nativeElement.children[0].children[0].focus(), 0);

    }
    onMouseLeave() {
        //this.menuIsVisible = false;
        this.hidden = true;
    }
}