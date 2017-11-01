import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PageNotFoundComponent } from './not-found.component';
import { LibraryModule } from './library/library.module';
import { AppRoutingModule } from './app-routing.module';
import { NavService } from './core/nav/shared/nav.service';
import { SeriesModule } from './series/series.module';
import { SearchModule } from './search/search.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    SeriesModule,
    LibraryModule,
    SearchModule,
    AppRoutingModule
  ],
  providers: [NavService, Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
