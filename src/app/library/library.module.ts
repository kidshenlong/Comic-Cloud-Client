import { NgModule } from '@angular/core';
import { LibraryComponent } from './library.component';
import { LibraryRoutingModule } from './library-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LibraryListComponent } from './library-list/library-list.component';
import { LibraryFeaturedListComponent } from './library-featured-list/library-featured-list.component';

@NgModule({
  imports: [
    LibraryRoutingModule,
    SharedModule
  ],
  declarations: [LibraryComponent, LibraryListComponent, LibraryFeaturedListComponent]
})
export class LibraryModule { }
