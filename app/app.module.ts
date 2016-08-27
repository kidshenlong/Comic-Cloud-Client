/**
 * Created by Michael on 26/08/2016.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { routing }       from './app.routing';
import {NavigationService} from "./shared/navigation/navigation.service";
import {Title} from "@angular/platform-browser";
import {LibraryComponent} from "./library/library.component";


@NgModule({
    imports:      [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        LibraryComponent
    ],
    providers: [
        Title,
        NavigationService
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }