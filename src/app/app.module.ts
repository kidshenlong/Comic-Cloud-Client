import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routing} from './app.routing';

import { AppComponent } from './app.component';
import { LibraryComponent } from './library'
import { NavigationComponent, NavigationService, StackComponent, AuthenticationService, AuthenticationGuard, UploadService } from './shared'
import { ComicNavigationComponent, ComicImageComponent, ComicComponent, ComicStateService, ComicService } from './comic'
import { SeriesComponent } from './series'
import { HomeComponent } from './home'
import { LoginComponent } from './login'
import { RegisterComponent } from './register';
import { SettingsComponent } from './settings/settings.component'

import './rxjs-extensions';
import { UploadComponent } from './upload/upload.component';

@NgModule({
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
        ComicNavigationComponent,
        SettingsComponent,
        UploadComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    providers: [
        Title,
        NavigationService,
        AuthenticationService,
        AuthenticationGuard,
        UploadService,
        ComicStateService,
        ComicService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }