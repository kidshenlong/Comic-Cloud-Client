/**
 * Created by Michael on 27/08/2016.
 */

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [

    //{ path: '/library', component: LibraryComponent },
    /*{ path: '/series/:id', component: SeriesComponent },
    //{ path: '/series/:id/edit', name: 'SeriesEdit', component: ComicComponent },
    { path: '/comic/:id', component: ComicComponent },*/

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
