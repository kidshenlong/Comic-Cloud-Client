/**
 * Created by Michael on 08/05/2016.
 */
import {Component, OnInit} from "@angular/core";
import {Title} from '@angular/platform-browser';
import {Router} from "@angular/router";
import {HTTP_PROVIDERS} from "@angular/http";

@Component({
    selector: 'comic',
    template: ``,
    styles: [``]
})

export class ComicComponent implements OnInit {

    constructor(title:Title) {
        //http://stackoverflow.com/questions/34602806/how-to-change-page-title-in-angular2-router
        title.setTitle("Comic Cloud - ");
    }

    ngOnInit() {}
}
