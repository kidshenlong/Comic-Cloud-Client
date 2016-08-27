/**
 * Created by Michael on 26/08/2016.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { routing }       from './app.routing';
import { FormsModule } from '@angular/forms';
import {NavigationService} from "./shared/navigation/navigation.service";
import {Title} from "@angular/platform-browser";
import {LibraryComponent} from "./library/library.component";
import {SeriesComponent} from "./series/series.component";
import {ComicComponent} from "./comic/comic.component";
import {HomeComponent} from "./home/home.component";
import {AuthenticationGuard} from "./shared/authentication/authentication-guard.service";


@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        LibraryComponent,
        SeriesComponent,
        ComicComponent,
        HomeComponent
    ],
    providers: [
        Title,
        NavigationService,
        AuthenticationGuard
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }