import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routing}       from '../app/';

import {
    AppComponent,
    NavigationComponent,
    NavigationService,
    AuthenticationService,
    AuthenticationGuard,
    UploadService,
    LibraryComponent,
    SeriesComponent,
    ComicNavigationComponent,
    ComicImageComponent,
    StackComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ComicsComponent
} from '../app';

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
        UploadService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
