/**
 * Created by Michael on 27/08/2016.
 */

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LibraryComponent} from "./library/library.component";

const appRoutes: Routes = [
    { 
        path: 'library', 
        component: LibraryComponent 
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
