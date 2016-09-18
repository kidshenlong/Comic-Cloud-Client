/**
 * Created by Michael on 27/08/2016.
 */

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/*import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {AuthenticationGuard} from "./shared/authentication/authentication-guard.service";
import {RegisterComponent} from "./register/register.component";
import {LibraryComponent} from "./library/library.component";
import {SeriesComponent} from "./series/series.component";
import {ComicsComponent} from "./comics/comics.component";*/
import {HomeComponent} from "./home";
import {LoginComponent} from "./login";
import {AuthenticationGuard} from "./shared";
import {RegisterComponent} from "./register";
import {LibraryComponent} from "./library";
/*import {SeriesComponent} from "./series";
import {ComicsComponent} from "./comics";*/

/*import {
    LibraryComponent,
    SeriesComponent,
    ComicsComponent,
    HomeComponent,
    AuthenticationGuard,
    LoginComponent,
    RegisterComponent
} from '../app';*/

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
    }/*,
    {
        path: 'series/:id',
        component: SeriesComponent,
        canActivate: [AuthenticationGuard]
    },
    {
        path: 'comic/:id',
        component: ComicsComponent,
        canActivate: [AuthenticationGuard]
    }*/
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);