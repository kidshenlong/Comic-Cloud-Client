import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search.component';

const searchRoutes: Routes = [
  { path: 'search',  component: SearchComponent },
];


@NgModule({
  imports: [
    RouterModule.forChild(searchRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class SearchRoutingModule { }
