/**
 * Created by Michael on 27/08/2016.
 */

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from "./home";
import {LoginComponent} from "./login";
import {AuthenticationGuard} from "./shared";
import {RegisterComponent} from "./register";
import {LibraryComponent} from "./library";
import {SeriesComponent} from "./series";
import {ComicComponent} from "./comic";

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [AuthenticationGuard]
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

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);