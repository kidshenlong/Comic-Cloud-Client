import {Component} from 'angular2/core';
import {HeaderMenuComponent} from './shared/header-menu.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {ComicComponent} from "./comic/comic.component";
import {LibraryComponent} from "./library/library.component";
import {SeriesComponent} from "./series/series.component";
import {Series} from "./series/series.model";

@Component({
    selector: 'comic-cloud-app',
    template: "<header-menu></header-menu><router-outlet></router-outlet>",
    directives: [ROUTER_DIRECTIVES, HeaderMenuComponent],
    providers: []
})
@RouteConfig([
    { path: '/library', name: 'Lbrary', component: LibraryComponent },
    { path: '/series/:id', name: 'Series', component: SeriesComponent },
    //{ path: '/series/:id/edit', name: 'SeriesEdit', component: ComicComponent },
    { path: '/comic/:id', name: 'Comic', component: ComicComponent },
    //{ path: '/comic/:id/edit', name: 'Comic', component: ComicReaderComponent },
])


export class AppComponent { }