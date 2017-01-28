import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './library.component';
import {SharedModule} from "../shared/shared.module";
import {LibraryFeaturedComponent} from "./library-featured/library-featured.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [LibraryComponent, LibraryFeaturedComponent]
})
export class LibraryModule { }
