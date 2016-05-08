import {Component, Input} from 'angular2/core';
import {Comic} from "../comic";
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: 'comic-stack',
    templateUrl: '/app/comic/comic-stack/comic-stack.component.html',//todo Refactor to be relative
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