import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SeriesComponent} from "./series.component";
import {ComicsModule} from "../comics/comics.module";

@NgModule({
  imports: [
    CommonModule,
    ComicsModule
  ],
  declarations: [
    SeriesComponent
  ]
})
export class SeriesModule { }
