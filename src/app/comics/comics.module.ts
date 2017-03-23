import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComicComponent} from "./comic/comic.component";
import {ComicImageComponent} from "./comic-image/comic-image.component";
import { ComicListComponent } from './comic-list/comic-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ComicComponent, ComicImageComponent, ComicListComponent
  ],
  exports: [
    ComicComponent, ComicListComponent
  ]
})
export class ComicsModule { }
