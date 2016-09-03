/**
 * Created by Michael on 26/08/2016.
 */

import { Component } from '@angular/core';
import {NavigationComponent} from "./shared/navigation/navigation.component";
import {ContextMenuComponent} from "./shared/context-menu/context-menu.component";

@Component({
    selector: 'comic-cloud-app',
    template: '<navigation></navigation><router-outlet></router-outlet><context-menu></context-menu>',
    directives: [ NavigationComponent, ContextMenuComponent ]
})

export class AppComponent { }