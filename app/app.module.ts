/**
 * Created by Michael on 26/08/2016.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { routing }       from './app.routing';
import {NavigationService} from "./shared/navigation/navigation.service";

@NgModule({
    imports:      [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        NavigationService
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }