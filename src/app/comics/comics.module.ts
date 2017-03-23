import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComicComponent} from "./comic/comic.component";
import {ComicImageComponent} from "./comic-image/comic-image.component";
import {RouterModule, RouterLink, Router} from "@angular/router";
import { ComicListComponent } from './comic-list/comic-list.component';
import {AppRoutingModule} from "../app-routing.module";

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    ComicComponent, ComicImageComponent, ComicListComponent
  ],
  exports: [
    ComicComponent, ComicListComponent
  ]
})
export class ComicsModule { }
