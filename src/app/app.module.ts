import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core/core.module';
import { PageNotFoundComponent } from './not-found.component';
import { LibraryModule } from './library/library.module';
import { AppRoutingModule } from './app-routing.module';
import { NavService } from './core/nav/shared/nav.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    LibraryModule,
    AppRoutingModule
  ],
  providers: [NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
