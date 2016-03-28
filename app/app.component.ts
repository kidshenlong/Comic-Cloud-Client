import {Component} from 'angular2/core';
import {HeaderMenuComponent} from './header-menu.component';
import {LibraryComponent} from './library.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {SeriesComponent} from "./series.component";

@Component({
    selector: 'comic-cloud-app',
    template: "<header-menu></header-menu><router-outlet></router-outlet>",
    directives: [ROUTER_DIRECTIVES, HeaderMenuComponent],
    providers: []
})
@RouteConfig([
    { path: '/library', name: 'Library', component: LibraryComponent },
    { path: '/series/:id', name: 'Series', component: SeriesComponent }
])


export class AppComponent { }