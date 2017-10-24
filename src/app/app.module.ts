import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {PageNotFoundComponent} from './not-found.component';
import {LibraryModule} from './library/library.module';
import { NavComponent } from './core/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    LibraryModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
