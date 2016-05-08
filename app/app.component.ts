import {Component} from 'angular2/core';
import {HeaderMenuComponent} from './shared/header-menu.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {SeriesComponent} from "./series/series.component";
import {ComicComponent} from "./comic/comic.component";
import {ComicReaderComponent} from "./comic/comic-reader/comic-reader.component";
//import {SeriesComponent} from "./series/series.component";

@Component({
    selector: 'comic-cloud-app',
    template: "<header-menu></header-menu><router-outlet></router-outlet>",
    directives: [ROUTER_DIRECTIVES, HeaderMenuComponent],
    providers: []
})
@RouteConfig([
    { path: '/library', name: 'Lbrary', component: SeriesComponent },
    { path: '/series/:id', name: 'Series', component: ComicComponent },
    { path: '/comic/:id', name: 'Comic', component: ComicReaderComponent },
])


export class AppComponent { }