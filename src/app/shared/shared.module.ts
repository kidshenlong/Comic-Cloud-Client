import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackComponent } from './stack/stack.component';
import { AppRoutingModule } from '../app-routing.module';
import { ComicsService } from './comics/comics.service';
import { SeriesService } from './series/series.service';
import { RouterModule } from '@angular/router';
import { FileDropComponent } from './file-drop/file-drop.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [StackComponent, FileDropComponent],
  exports: [CommonModule, StackComponent, FileDropComponent]
})
export class SharedModule { }
