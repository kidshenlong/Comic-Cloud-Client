import {Component, Input} from 'angular2/core';
import {Series} from "./series";
import {ROUTER_DIRECTIVES} from "angular2/router";
//import {RouteParams, RouterLink} from "angular2/router";
//ROUTER_DIRECTIVES,
@Component({
    selector: 'series-stack',
    template: `
        <a [routerLink]="['Series', {id: seriesObject.id}]">
             <img [src]="seriesObject.cover_image ">
             <div>{{seriesObject.title}}</div>
        </a>
    `,
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