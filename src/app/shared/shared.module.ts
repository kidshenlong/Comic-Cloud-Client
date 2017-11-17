import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackComponent } from './stack/stack.component';
import { AppRoutingModule } from '../app-routing.module';
import { ComicsService } from './comics/comics.service';
import { SeriesService } from './series/series.service';
import { RouterModule } from '@angular/router';
import { FileDropDirective } from './file-drop/file-drop.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [StackComponent, FileDropDirective],
  exports: [CommonModule, StackComponent, FileDropDirective],
  providers: [ComicsService, SeriesService]
})
export class SharedModule { }
