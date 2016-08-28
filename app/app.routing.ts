/**
 * Created by Michael on 27/08/2016.
 */

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LibraryComponent} from "./library/library.component";
import {SeriesComponent} from "./series/series.component";
import {ComicComponent} from "./comic/comic.component";
import {HomeComponent} from "./home/home.component";
import {AuthenticationGuard} from "./shared/authentication/authentication-guard.service";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    { 
        path: 'library', 
        component: LibraryComponent,
        canActivate: [AuthenticationGuard]
    },
    {
        path: 'series/:id',
        component: SeriesComponent,
        canActivate: [AuthenticationGuard]
    },
    {
        path: 'comic/:id',
        component: ComicComponent,
        canActivate: [AuthenticationGuard]
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
