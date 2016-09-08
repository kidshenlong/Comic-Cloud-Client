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
import {AuthenticationService} from "./shared/authentication/authentication.service";
import {UploadService} from "./shared/upload/upload.service";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {HttpModule} from "@angular/http";
import FILE_UPLOAD_DIRECTIVES from "ng2-file-upload/ng2-file-upload";
import {NavigationComponent} from "./shared/navigation/navigation.component";
import {StackComponent} from "./shared/stack/stack.component";
import {ComicImageComponent} from "./comic/comic-image/comic-image.component";
import {ComicNavigationComponent} from "./comic/comic-navigation/comic-navigation.component";


@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        LibraryComponent,
        SeriesComponent,
        ComicComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        NavigationComponent,
        StackComponent,
        ComicImageComponent,
        ComicNavigationComponent
        //FILE_UPLOAD_DIRECTIVES
    ],
    providers: [
        Title,
        NavigationService,
        AuthenticationService,
        AuthenticationGuard,
        UploadService
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }