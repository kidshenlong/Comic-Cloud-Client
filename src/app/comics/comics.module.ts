import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComicComponent} from "./comic/comic.component";
import {ComicImageComponent} from "./comic-image/comic-image.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ComicComponent, ComicImageComponent
  ],
  exports: [
    ComicComponent
  ]
})
export class ComicsModule { }
