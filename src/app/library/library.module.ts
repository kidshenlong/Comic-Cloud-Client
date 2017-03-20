import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './library.component';
import {SharedModule} from "../shared/shared.module";
import {LibraryFeaturedComponent} from "./library-featured/library-featured.component";
import {ComicsModule} from "../comics/comics.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ComicsModule
  ],
  declarations: [LibraryComponent, LibraryFeaturedComponent]
})
export class LibraryModule { }
