import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackComponent } from './stack/stack.component';
import { AppRoutingModule } from '../app-routing.module';
import { ComicsService } from './comics/comics.service';
import { SeriesService } from './series/series.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [StackComponent],
  exports: [CommonModule, StackComponent],
  providers: [ComicsService, SeriesService]
})
export class SharedModule { }
