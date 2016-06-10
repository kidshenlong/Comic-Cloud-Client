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
import {ViewChildren, AfterViewInit } from '@angular/core';
import {ComicStateService} from "./comic-state/comic-state.service";
import {ComicStatusType} from "./comic-status/comic-status.type";


@Component({
    selector: 'comic',
    templateUrl: "/app/comic/comic.component.html",
    styleUrls: ['app/comic/comic.component.css'],
    directives: [ComicNavigationComponent, ComicImageComponent],
    providers: [Title, ComicService, HTTP_PROVIDERS, ComicStateService]
})

export class ComicComponent implements OnActivate, OnInit, AfterViewInit {

    comic: Comic;
    title: Title;
    comicStatus: ComicStatusType = ComicStatusType.Waiting;
    @ViewChildren(ComicImageComponent) private comicImageComponents:QueryList<ComicImageComponent>;


    constructor(private comicService: ComicService, title:Title, private comicStateService: ComicStateService, navigationService: NavigationService) {
        this.title = title;
        navigationService.changeMode(NavigationType.Reader);
        comicStateService.comicStatus$.subscribe(newStatus => this.comicStatus = newStatus);
    }

    ngOnInit(){

    }

    ngAfterViewInit() {
        //Delay a second to avoid one-time devMode unidirectional-data-flow-violation error
        setTimeout(() => {

            var from = 0;
            var to = 3;//todo (mpm) 10/06/2016 Add constraint for if 3 doesn't exist

            this.loadImages(from, to);

        }, 0);
    }

    routerOnActivate(curr: RouteSegment): void {
        var comic_id = curr.getParam('id');
        this.title.setTitle("Comic Cloud - ");
        this.comic = this.getComic(comic_id);
    }

    getComic(comic_id: string){
        return new Comic("905B5C64-1560-11E6-A89C-564E36676F51", 1, null, [
            "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg",
            "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg",
            "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"
        ], "8C3D3E48-155D-11E6-8248-564E36676F51", "1", "complete");
    }

    loadImages(from: number, to: number){
        //this.comicImageComponents.toArray()[0].enable();
        this.comicStateService.setComicStatus(ComicStatusType.Loading);

    }


}
