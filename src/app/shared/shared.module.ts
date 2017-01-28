import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComicComponent} from "./comic/comic.component";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ComicComponent
  ],
  declarations: [
    ComicComponent
  ]
})
export class SharedModule { }
