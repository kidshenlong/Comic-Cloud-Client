import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LibraryComponent} from './library.component';

const libraryRoutes: Routes = [
  { path: 'library',  component: LibraryComponent },
];


@NgModule({
  imports: [
    RouterModule.forChild(libraryRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class LibraryRoutingModule { }
