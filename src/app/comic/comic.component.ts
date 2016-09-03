/**
 * Created by Michael on 08/05/2016.
 */
import {Component, OnInit} from "@angular/core";
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from "@angular/router";
import {Navigation, NavigationService} from "../shared";
import {ViewChildren, AfterViewInit, ElementRef, QueryList} from '@angular/core';

import {ComicService} from "./comic.service";
import {ComicStateService} from "./comic-state";
import {Comic} from "./comic";
import {ComicStatus} from "./comic-status";
import {ComicImageComponent} from "./comic-image";

@Component({
    selector: 'comic',
    templateUrl: "comic.component.html",
    styleUrls: ['comic.component.css'],
    providers: [Title, ComicService, ComicStateService],
    host: {
        '(document:keyup)': '_keyup($event)'
    },
})

export class ComicComponent implements OnInit, AfterViewInit {

    comic: Comic;
    title: Title;
    comicStatus: ComicStatus = ComicStatus.Waiting;
    @ViewChildren(ComicImageComponent) private comicImageComponents: QueryList<ComicImageComponent>;
    private _currentPage: number = 0;

    private currentPageSource = new Subject<number>();
    currentPage$ = this.currentPageSource.asObservable();

    loadedImages: number = 0;


    @ViewChildren(ComicImageComponent) private comicImageComponents: QueryList<ComicImageComponent>;

    constructor(private comicService: ComicService, title:Title, private elementRef: ElementRef, private comicStateService: ComicStateService, navigationService: NavigationService, private route: ActivatedRoute, private router: Router, private location: Location) {
        this.title = title;
        navigationService.changeMode(NavigationType.Disabled);
        //this.currentPageSource.next(0);

        //console.log(this.currentPageSource.complete());
        /*comicStateService.comicStatus$.subscribe(newStatus => this.comicStatus = newStatus);
        navigationService.changeMode(Navigation.Reader);
        comicStateService.comicStatus$.subscribe(newStatus => this.comicStatus = newStatus);
        comicStateService.currentPage$.subscribe(page => {
            this._currentPage = page;
            this.viewPage(page);
        });*/

        this.currentPage$.subscribe(page => {
            this._currentPage = page;
            this.viewPage(page);
        });
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

 

    ngOnInit(){
        this.route.params.subscribe(params => {
            let id = params['id'];
            this.title.setTitle("Comic Cloud - ");
            this.comic = this.getComic(id);
            this.comicLength = this.comic.comic_book_archive_contents.length;
        });

    }

    getComic(comic_id: string){
        return new Comic("905B5C64-1560-11E6-A89C-564E36676F51", 1, null, [
            "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg",
            "http://static7.comicvine.com/uploads/scale_super/3/39001/3818661-amazingfantasy15.jpg",
            "https://s-media-cache-ak0.pinimg.com/236x/c6/2d/68/c62d689f3644b94165505215724d691d.jpg",
            "http://www.coverbrowser.com/image/ultimate-spider-man/1-6.jpg",
            "http://www.coverbrowser.com/image/ultimate-spider-man/2-4.jpg",
            "http://www.coverbrowser.com/image/ultimate-spider-man/3-2.jpg",
            "http://www.coverbrowser.com/image/ultimate-spider-man/4-20.jpg"
        ], "8C3D3E48-155D-11E6-8248-564E36676F51", "1", "complete");
    }

    loadImages(from: number, to: number){
        var componentsArray = this.comicImageComponents.toArray();

        //this.comicStateService.setComicStatus(ComicStatusType.Loading);

        if(to > this.comicLength) to = this.comicLength;

        for(var i = from; i <= to; i++){
            componentsArray[i].enable();
        }

    }


    get currentPage() {
        //console.log(`[comic.component]getting value for text "${this._currentPage}"`);
        return this._currentPage;
    }

    set currentPage(value) {

        if(value >= 0 && value < this.comicLength) {

            this.currentPageSource.next(value);

            if(value >= (this.loadedImages - 2)) this.loadImages(this.loadedImages - 1, this.loadedImages + 2);

            //this._currentPage = value;
        }
    }

    viewPage(page: number){
        console.log("change page to: " + page);
        var pageCount = this.comic.comic_book_archive_contents.length;
        var componentsArray = this.comicImageComponents.toArray();
        //console.log(componentsArray);

        for (let component of componentsArray) component.hidden = true;
        componentsArray[page].hidden = false;

    }

    private _keyup(event: KeyboardEvent) {
        if (event.keyCode === 37){
            console.log("left");
            this.currentPage--;
        } else if (event.keyCode === 39){
            console.log("right");
            this.currentPage++;
        } else if (event.keyCode === 27){
            console.log("exit");
            this.navigateBackToSeries();
        }
    }

    navigateBackToSeries(){
        //console.log(this.location);
        //todo This should ideally navigate backwards if series if the last viewed and go directly if not
        this.router.navigate(['/series/' + this.comic.series_id])
    }

    onLoaded(event){
        this.loadedImages++;
        console.log(event);
    }



}
