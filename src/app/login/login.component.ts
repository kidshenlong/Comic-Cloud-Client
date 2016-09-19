/**
 * Created by Michael on 27/08/2016.
 */
import {Component} from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Title} from "@angular/platform-browser";

import {Navigation, NavigationService, AuthenticationService} from "../shared";

@Component({
    selector: 'login',
    templateUrl: "login.component.html",
    styleUrls: ['login.component.css'],
    providers: [],
})

export class LoginComponent{

    constructor(title:Title, navigationService: NavigationService, public authenticationService: AuthenticationService, private router: Router) {
        title.setTitle("Comic Cloud - Login");
        navigationService.changeMode(Navigation.Disabled);
    }
    
    login(event, username, password){
        event.preventDefault();

        this.authenticationService.login(username, password).subscribe(
            response => this.router.navigate(['/library']),
            error => alert(error)
        );

    }

}