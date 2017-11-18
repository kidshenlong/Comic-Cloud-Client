import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackComponent } from './stack/stack.component';
import { AppRoutingModule } from '../app-routing.module';
import { ComicsService } from './comics/comics.service';
import { SeriesService } from './series/series.service';
import { RouterModule } from '@angular/router';
import { FileDropDirective } from './file-drop/file-drop.directive';
import { FileDropPaneComponent } from './file-drop-pane/file-drop-pane.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [StackComponent, FileDropDirective, FileDropPaneComponent],
  exports: [CommonModule, StackComponent, FileDropDirective, FileDropPaneComponent],
  providers: [ComicsService, SeriesService]
})
export class SharedModule { }
