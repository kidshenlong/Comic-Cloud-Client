import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicComponent } from './comic.component';
import { ComicRoutingModule } from './comic-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    ComicRoutingModule,
    SharedModule
  ],
  declarations: [ComicComponent],
  exports: []
})
export class ComicModule { }
