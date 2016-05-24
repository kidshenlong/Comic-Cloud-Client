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

    constructor(private comicImageService: ComicImageService, el: ElementRef, renderer: Renderer) {
        //console.log(this.comicImageService.getComicImage(""));
        this.comicImageService.getComicImage("").subscribe(
            resp => renderer.setElementAttribute(el.nativeElement, 'src', resp)
        );
    }
}
