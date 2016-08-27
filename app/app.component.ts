/**
 * Created by Michael on 26/08/2016.
 */

import { Component } from '@angular/core';
import {NavigationComponent} from "./shared/navigation/navigation.component";

@Component({
    selector: 'comic-cloud-app',
    template: '<navigation></navigation><router-outlet></router-outlet>',
    directives: [ NavigationComponent ]
})

export class AppComponent { }