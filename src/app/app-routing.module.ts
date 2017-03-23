import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import {LibraryComponent} from "./library/library.component";
import {SeriesComponent} from "./series/series.component";
import {SearchComponent} from "./search/search.component";

const appRoutes: Routes = [
  {
    path: 'library', component: LibraryComponent
  },
  {
    path: 'series/:id', component: SeriesComponent
  },
  {
    path: 'search', component: SearchComponent
  },
  {
    path: '', redirectTo: '/library', pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
