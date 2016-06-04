/**
 * Created by Michael on 08/05/2016.
 */
import {Component, OnInit, ElementRef, Renderer} from "@angular/core";
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

    imageSrc = null;//"http://placehold.it/1000x1000";

    elementRef: ElementRef;

    constructor(private comicImageService: ComicImageService, el: ElementRef, renderer: Renderer) {
        //console.log(this.comicImageService.getComicImage(""));
        this.elementRef = el;
        this.comicImageService.getComicImage("").map(() => this.setImage(""))
            .subscribe(() => console.log("well"));
        /*this.comicImageService.getComicImage("").subscribe(
            resp => renderer.setElementAttribute(el.nativeElement, 'src', resp)
        );*/
    }

    setImage(image){
        console.log("complete");
        console.log(this.elementRef.nativeElement.src);
        //this.elementRef.nativeElement.src = "http://static5.comicvine.com/uploads/scale_small/6/66303/2734164-legendluther01_cover.jpeg"
        setTimeout(() => {
            this.imageSrc = "http://static5.comicvine.com/uploads/scale_small/6/66303/2734164-legendluther01_cover.jpeg"
        }, 2000);

    }
}
