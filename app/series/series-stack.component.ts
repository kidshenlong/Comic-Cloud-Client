import {Component, Input} from '../../node_modules/angular2/core.d';
import {Series} from "./series";
import {ROUTER_DIRECTIVES} from "../../node_modules/angular2/router.d";
//import {RouteParams, RouterLink} from "angular2/router";
//ROUTER_DIRECTIVES,
@Component({
    selector: 'series-stack',
    template: `
        <a [routerLink]="['Series', {id: seriesObject.id}]">
             <img [src]="seriesObject.cover_image ">
             <div class="information" *ngIf="seriesObject">{{seriesObject.pretty_title()}}</div>
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