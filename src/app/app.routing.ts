/**
 * Created by Michael on 27/08/2016.
 */

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    LibraryComponent,
    SeriesComponent,
    ComicsComponent,
    HomeComponent,
    AuthenticationGuard,
    LoginComponent,
    RegisterComponent
} from '../app';

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
        component: ComicsComponent,
        canActivate: [AuthenticationGuard]
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);