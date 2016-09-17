/**
 * Created by Michael on 08/05/2016.
 */
import {Component, OnInit, ElementRef, Renderer, Input} from "@angular/core";
import {Title} from '@angular/platform-browser';
import {ComicImageService} from "./comic-image.service";

@Component({
    selector: 'comic-image',
    templateUrl: "/app/comic/comic-image/comic-image.component.html",
    styleUrls: ['app/comic/comic-image/comic-image.component.css'],
    providers: [ComicImageService]
})

export class ComicImageComponent {

    @Input() srcToLoad: string;

    hidden = true;

    enabled = false;

    //elementRef: ElementRef;
    //private comicImageService: ComicImageService;

    constructor(private comicImageService: ComicImageService, public element: ElementRef, renderer: Renderer) {

    }

    enable(){
        this.enabled = true;
    }

    loaded(event){
        console.log(event);
        console.log("loaded");
    }
}
