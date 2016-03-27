import {Component} from 'angular2/core';
import {ComicStackComponent} from './comic-stack.component';
import {HeaderMenuComponent} from './header-menu.component';
@Component({
    selector: 'comic-cloud-app',
    template: `
        <h1>My First Angular 2 App</h1>
        <header-menu></header-menu>
        <comic-stack></comic-stack>
    `,
    directives: [ComicStackComponent, HeaderMenuComponent]
})

export class AppComponent { }