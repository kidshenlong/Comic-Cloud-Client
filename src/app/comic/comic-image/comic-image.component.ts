/**
 * Created by Michael on 08/05/2016.
 */
import {Component, OnInit, ElementRef, Renderer, Input, Output, EventEmitter} from "@angular/core";
import {ComicImageService} from "./comic-image.service";

@Component({
    selector: 'comic-image',
    templateUrl: "comic-image.component.html",
    styleUrls: ['comic-image.component.css'],
    providers: [ComicImageService]
})

export class ComicImageComponent {

    @Input() srcToLoad: string;

    hidden = true;

    enabled = false;

    @Output() onLoaded = new EventEmitter<boolean>();
    isLoaded: boolean = false;

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
        this.onLoaded.emit(true);
        this.isLoaded = true;
    }
}
