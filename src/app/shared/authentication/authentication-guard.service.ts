/**
 * Created by Michael on 27/08/2016.
 */

import { Injectable }     from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from "./authentication.service";

@Injectable()
export class AuthenticationGuard implements CanActivate {

    redirectToLibrary: string[] = ["login", "register"];
    redirectToLogin: string[] = ["series", "comic", "library"];

    constructor(private authenticationService: AuthenticationService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        var attemptedPath = route.url[0].path;

        if(this.authenticationService.isLoggedIn()){
            return this.redirectTo(attemptedPath, this.redirectToLibrary, '/library');
        } else {
            return this.redirectTo(attemptedPath, this.redirectToLogin, '/login');
        }

    }

    redirectTo(attempted_path: string, paths: string[], redirect_path: string){ //todo better name?

        if(paths.indexOf(attempted_path) != -1){
            this.router.navigate([redirect_path]);
            return false;
        } else {
            return true;
        }

    }

}