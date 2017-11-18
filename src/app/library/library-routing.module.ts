import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryComponent } from './library.component';
import { AuthGuard } from '../shared/auth/auth-guard/auth-guard.service';

const libraryRoutes: Routes = [
  { path: 'library',  component: LibraryComponent, canActivate: [AuthGuard] },
];


@NgModule({
  imports: [
    RouterModule.forChild(libraryRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard
  ],
  declarations: []
})
export class LibraryRoutingModule { }
