import {Component} from 'angular2/core';
import {ComicStackComponent} from './comic-stack.component';
import {HeaderMenuComponent} from './header-menu.component';
@Component({
    selector: 'comic-cloud-app',
    template: `
        <header-menu></header-menu>
        <comic-stack></comic-stack>
    `,
    directives: [ComicStackComponent, HeaderMenuComponent]
})

export class AppComponent { }