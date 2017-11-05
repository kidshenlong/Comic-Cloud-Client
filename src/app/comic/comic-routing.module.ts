import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicComponent } from './comic.component';

const comicRoutes: Routes = [
  { path: 'comic/:id',  component: ComicComponent },
];


@NgModule({
  imports: [
    RouterModule.forChild(comicRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class ComicRoutingModule { }
