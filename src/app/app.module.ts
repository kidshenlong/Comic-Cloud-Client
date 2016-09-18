import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routing} from './app.routing';

import { AppComponent } from './app.component';

/*import {
    //NavigationComponent,
/!*    NavigationService,
    AuthenticationService,
    AuthenticationGuard,
    UploadService,*!/
    LibraryComponent,
/!*    SeriesComponent,
    ComicNavigationComponent,
    ComicImageComponent,
    StackComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ComicsComponent*!/
} from '../app';*/

import { LibraryComponent } from './library'
import { NavigationComponent, NavigationService, StackComponent, AuthenticationService, AuthenticationGuard, UploadService } from './shared'
import { ComicNavigationComponent, ComicImageComponent, ComicsComponent, ComicStateService, ComicsService } from './comics'
import { SeriesComponent } from './series'
import { HomeComponent } from './home'
import { LoginComponent } from './login'
import { RegisterComponent } from './register'

@NgModule({
    declarations: [
        AppComponent,
        LibraryComponent,
        SeriesComponent,
        ComicsComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        NavigationComponent,
        StackComponent,
        ComicImageComponent,
        ComicNavigationComponent
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
        ComicsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }