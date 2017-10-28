import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesComponent } from './series.component';
import { SeriesRoutingModule } from './series-routing.module';
import { SeriesListComponent } from './series-list/series-list.component';

@NgModule({
  imports: [
    CommonModule,
    SeriesRoutingModule
  ],
  declarations: [SeriesComponent, SeriesListComponent]
})
export class SeriesModule { }
