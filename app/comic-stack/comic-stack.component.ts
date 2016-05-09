import {Component, Input} from '@angular/core';
import {Comic} from "../comic/comic.model";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    selector: 'comic-stack',
    templateUrl: '/app/comic-stack/comic-stack.component.html',//todo Refactor to be relative
    host: {
        'class': 'stack'
    },
    styles: [`

    `],
    directives: [ROUTER_DIRECTIVES]
    //providers: [RouteParams, RouterLink]
})
export class ComicStackComponent {
    @Input()//Declares a data-bound input property.
    comicObject: Comic;
}