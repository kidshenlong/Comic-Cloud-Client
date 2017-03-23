import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SeriesComponent} from "./series.component";
import {ComicsModule} from "../comics/comics.module";
import { SeriesListComponent } from './series-list/series-list.component';

@NgModule({
  imports: [
    CommonModule,
    ComicsModule
  ],
  declarations: [
    SeriesComponent,
    SeriesListComponent
  ],
  exports: [
    SeriesListComponent
  ]
})
export class SeriesModule { }
