/**
 * Created by Michael on 08/05/2016.
 */
import {Component, OnInit, ElementRef, Renderer, Input} from "@angular/core";
import {Title} from '@angular/platform-browser';
import {HTTP_PROVIDERS} from "@angular/http";
import {ComicImageService} from "./comic-image.service";

@Component({
    selector: 'comic-image',
    templateUrl: "/app/comic/comic-image/comic-image.component.html",
    styleUrls: ['app/comic/comic-image/comic-image.component.css'],
    providers: [ComicImageService]
})

export class ComicImageComponent {

    @Input() srcToLoad: string;
    imageSrc = null;//"http://placehold.it/1000x1000";
    imageSrc2 = "http://static5.comicvine.com/uploads/scale_small/6/66303/2734164-legendluther01_cover.jpeg";

    hidden = true;

    //elementRef: ElementRef;
    //private comicImageService: ComicImageService;

    constructor(private comicImageService: ComicImageService, public element: ElementRef, renderer: Renderer) {

    }

    loaded(event){
        console.log(event);
        console.log("loaded");
    }
}
