import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackComponent } from './stack/stack.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [StackComponent],
  exports: [StackComponent]
})
export class SharedModule { }
