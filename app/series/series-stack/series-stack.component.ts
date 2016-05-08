import {Component, Input} from 'angular2/core';
import {Series} from "../series";
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: 'series-stack',
    templateUrl: '/app/series/series-stack/series-stack.component.html',//todo Refactor to be relative
    host: {
        'class': 'stack'
    },
    styles: [`

    `],
    directives: [ROUTER_DIRECTIVES]
    //providers: [RouteParams, RouterLink]
})
export class SeriesStackComponent {
    @Input()//Declares a data-bound input property.
    seriesObject: Series;
}