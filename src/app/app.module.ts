import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {LibraryModule} from "./library/library.module";
import {Routes, RouterModule} from "@angular/router";
import {LibraryComponent} from "./library/library.component";
import {NavService} from "./core/nav/shared/nav.service";
import {SearchComponent} from "./search/search.component";
import {SearchModule} from "./search/search.module";
import { SeriesComponent } from './series/series.component';
import {SeriesModule} from "./series/series.module";
import {AppRoutingModule} from "./app-routing.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    LibraryModule,
    SeriesModule,
    SearchModule,
    AppRoutingModule
  ],
  providers: [NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
