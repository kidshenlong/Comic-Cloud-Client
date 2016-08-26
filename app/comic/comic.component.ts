/**
 * Created by Michael on 08/05/2016.
 */
import {Component, OnInit} from "@angular/core";
import {Title} from '@angular/platform-browser';
import {OnActivate, Router, RouteSegment} from "@angular/router";
import {HTTP_PROVIDERS} from "@angular/http";
import {Comic} from "./comic.model";
import {ComicService} from "./comic.service";
import {NavigationService} from "../shared/navigation/navigation.service";
import {NavigationType} from "../shared/navigation/navigation.type";
import {ComicNavigationComponent} from "./comic-navigation/comic-navigation.component";
import {ComicImageComponent} from "./comic-image/comic-image.component";
//import {ComicStateService} from "./comic-state/comic-state.service";
import {ViewChildren, AfterViewInit, ElementRef, QueryList} from '@angular/core';
import {ComicStateService} from "./comic-state/comic-state.service";
import {ComicStatusType} from "./comic-status/comic-status.type";


@Component({
    selector: 'comic',
    templateUrl: "/app/comic/comic.component.html",
    styleUrls: ['app/comic/comic.component.css'],
    directives: [ComicNavigationComponent, ComicImageComponent],
    providers: [Title, ComicService, HTTP_PROVIDERS, ComicStateService],
    host: {
        '(document:keyup)': '_keyup($event)'
    },
})

export class ComicComponent implements OnActivate, OnInit, AfterViewInit {

    comic: Comic;
    title: Title;
    comicStatus: ComicStatusType = ComicStatusType.Waiting;
    @ViewChildren(ComicImageComponent) private comicImageComponents: QueryList<ComicImageComponent>;
    private _currentPage: number = 0;

    constructor(private comicService: ComicService, title:Title, private elementRef: ElementRef, private comicStateService: ComicStateService, navigationService: NavigationService) {
        this.title = title;
        navigationService.changeMode(NavigationType.Reader);
        comicStateService.comicStatus$.subscribe(newStatus => this.comicStatus = newStatus);
        comicStateService.currentPage$.subscribe(page => {
            this._currentPage = page;
            this.viewPage(page);
        });
    }

    ngOnInit(){

    }

    ngAfterViewInit() {
        //Delay to avoid one-time devMode unidirectional-data-flow-violation error
        setTimeout(() => {

            this.elementRef.nativeElement.focus();

            //this.comicImageComponents.toArray();

            var from = 0;
            var to = 2;//todo (mpm) 10/06/2016 Add constraint for if 3 doesn't exist

            this.loadImages(from, to);
            this.viewPage(0);
            console.log(this.comicImageComponents);

        }, 0);
    }

    routerOnActivate(curr: RouteSegment): void {
        var comic_id = curr.getParam('id');
        this.title.setTitle("Comic Cloud - ");
        this.comic = this.getComic(comic_id);
        //this.comicStateService.setCurrentComic(this.comic);
        this.comicStateService.setPageCount(this.comic.comic_book_archive_contents.length);
    }

    getComic(comic_id: string){
        return new Comic("905B5C64-1560-11E6-A89C-564E36676F51", 1, null, [
            "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg",
            "http://static7.comicvine.com/uploads/scale_super/3/39001/3818661-amazingfantasy15.jpg",
            "https://s-media-cache-ak0.pinimg.com/236x/c6/2d/68/c62d689f3644b94165505215724d691d.jpg"
        ], "8C3D3E48-155D-11E6-8248-564E36676F51", "1", "complete");
    }

    loadImages(from: number, to: number){
        var componentsArray = this.comicImageComponents.toArray();

        this.comicStateService.setComicStatus(ComicStatusType.Loading);

        for(var i = from; i <= to; i++){
            componentsArray[i].enable();
        }

    }


    get currentPage() {
        //console.log(`[comic.component]getting value for text "${this._currentPage}"`);
        return this._currentPage;
    }

    set currentPage(value) {
        //console.log("[New Page]" + value);
        //console.log("[Page Count]" + pageCount);
        var pageCount = this.comic.comic_book_archive_contents.length;

        if(value >= 0 || value < (pageCount - 1)) {

            this.comicStateService.setCurrentPage(value);

            this._currentPage = value;
        }
    }

    viewPage(page: number){
        console.log("change page to: " + page);
        var pageCount = this.comic.comic_book_archive_contents.length;
        var componentsArray = this.comicImageComponents.toArray();
        console.log(componentsArray);

        //if((page - 1) < pageCount || page >= 0) {
            for (let component of componentsArray) component.hidden = true;
            componentsArray[page].hidden = false;
        //}
    }

    private _keyup(event: KeyboardEvent) {
        if (event.keyCode === 37){
            console.log("left");
            this.currentPage--;
        } else if (event.keyCode === 39){
            console.log("right");
            this.currentPage++;
        }

    }



}
