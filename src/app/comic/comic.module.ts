import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicComponent } from './comic.component';
import { ComicRoutingModule } from './comic-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ComicImageComponent } from './comic-image/comic-image.component';
import { ComicStateService } from './shared/comic-state.service';

@NgModule({
  imports: [
    ComicRoutingModule,
    SharedModule
  ],
  providers: [ComicStateService],
  declarations: [ComicComponent, ComicImageComponent],
  exports: []
})
export class ComicModule { }
