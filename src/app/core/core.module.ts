import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { NavComponent } from './nav/nav.component';
import {FooterComponent} from "./footer/footer.component";


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    NavComponent,
    FooterComponent
  ],
  declarations: [NavComponent, FooterComponent]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
