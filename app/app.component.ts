import { Component, OnInit }   from '@angular/core';
import {NavigationComponent} from './shared/navigation/navigation.component';
//import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { Router, ROUTER_DIRECTIVES, Routes, ROUTER_PROVIDERS } from '@angular/router';

import {ComicComponent} from "./comic/comic.component";
import {LibraryComponent} from "./library/library.component";
import {SeriesComponent} from "./series/series.component";
import {Series} from "./series/series.model";

@Component({
    selector: 'comic-cloud-app',
    template: '<navigation></navigation><router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES, NavigationComponent],
    //providers: [ROUTER_PROVIDERS]
})

@Routes([
    { path: '/library', component: LibraryComponent },
    { path: '/series/:id', component: SeriesComponent },
    //{ path: '/series/:id/edit', name: 'SeriesEdit', component: ComicComponent },
    { path: '/comic/:id', component: ComicComponent },
    //{ path: '/comic/:id/edit', name: 'Comic', component: ComicReaderComponent },
])


export class AppComponent  implements OnInit {

    //currentPage;

    constructor(private router: Router) {
        router.changes.subscribe(() => {
            window.scrollTo(0, 0);
        });
    }

    ngOnInit() {}

    /*public isRouteActive(route) {
        return this.router.isRouteActive(this.router.generate(route))
    }*/
}