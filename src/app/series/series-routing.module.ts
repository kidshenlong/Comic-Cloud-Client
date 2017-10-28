import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { SeriesComponent } from './series.component';

const seriesRoutes: Routes = [
  { path: 'series/:id',  component: SeriesComponent },
];


@NgModule({
  imports: [
    RouterModule.forChild(seriesRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class SeriesRoutingModule { }
