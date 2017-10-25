import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './library.component';
import { LibraryRoutingModule } from './library-routing.module';
import { LibraryFeaturedComponent } from './library-featured/library-featured.component';

@NgModule({
  imports: [
    CommonModule,
    LibraryRoutingModule
  ],
  declarations: [LibraryComponent, LibraryFeaturedComponent]
})
export class LibraryModule { }
