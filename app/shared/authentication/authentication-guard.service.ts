/**
 * Created by Michael on 27/08/2016.
 */

import { Injectable }     from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from "./authentication.service";

@Injectable()
export class AuthenticationGuard implements CanActivate {
    constructor(private authenticationService: AuthenticationService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        /*console.log(route);
        console.log(route.url[0].path);

        if (this.authenticationService.isLoggedIn) { return true; }

        // Store the attempted URL for redirecting
        this.authenticationService.redirectUrl = state.url;

        // Navigate to the login page
        this.router.navigate(['/login']);
        return false;*/

        var attemptedPath = route.url[0].path;

        var redirectToLibrary = ["login", "register"];
        var redirectToLogin = ["series", "comic", "library"];

        console.log(attemptedPath);

       /* if(this.authenticationService.isLoggedIn){return true;}

        // Store the attempted URL for redirecting
        this.authenticationService.redirectUrl = state.url;

        // Navigate to the login page
        this.router.navigate(['/login']);
        return false;*/


        /*if(this.authenticationService.isLoggedIn && attemptedPath != "login"){
            return true;
        }else if(this.authenticationService.isLoggedIn && attemptedPath == "login"){
            this.router.navigate(['/library']);
            return false;
        }else {

            // Store the attempted URL for redirecting
            this.authenticationService.redirectUrl = state.url;

            // Navigate to the login page
            this.router.navigate(['/login']);
            return false;
        }*/

        if(this.authenticationService.isLoggedIn){
            console.log("logged in");

            console.log("redirectToLibrary: " + redirectToLibrary);

            if(redirectToLibrary.indexOf(attemptedPath) != -1){
                console.log("redirect to library");
                this.router.navigate(['/library']);
                return false;
            } else {
                return true;
            }

            //if(redirectToLibrary.hasOwnProperty(attemptedPath)){
            /*if(typeof redirectToLibrary[attemptedPath] === 'undefined'){
                console.log("redirect to library");
                this.router.navigate(['/library']);
                return false;
            } else {
                console.log("wuttttt");
                return true;
            }*/
        } else {
            console.log("not logged in");
            // Store the attempted URL for redirecting
            //this.authenticationService.redirectUrl = state.url;

            // Navigate to the login page
            /*this.router.navigate(['/login']);
            return false;*/

            //console.log("redirectToLogin: " + redirectToLogin);



            //if(redirectToLogin.hasOwnProperty(attemptedPath)){
            /*if(typeof redirectToLogin[attemptedPath] === 'undefined'){
                console.log("redirect to login");
                this.router.navigate(['/login']);
                return false;
            } else {
                return true;
            }*/
        }

        return true;
    }
}