import {Component} from 'angular2/core';
//import {ComicStackComponent} from './comic-stack.component';
//import {HeaderMenuComponent} from './header-menu.component';
import {LibraryComponent} from './library.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
    selector: 'comic-cloud-app',
    template: "<router-outlet></router-outlet>",
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
    //directives: []
})
@RouteConfig([
    { path: '/library', name: 'Library', component: LibraryComponent }
])


export class AppComponent { }