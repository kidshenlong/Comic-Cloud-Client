/**
 * Created by Michael on 27/08/2016.
 */
import {Component} from "@angular/core";
import {Navigation, NavigationService, AuthenticationService} from "../shared";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'register',
    templateUrl: "/app/register/register.component.html",
    styleUrls: ['app/register/register.component.css'],
    providers: [],
    //directives: []
})

export class RegisterComponent{

    constructor(title:Title, navigationService: NavigationService, public authenticationService: AuthenticationService) {
        title.setTitle("Comic Cloud - Register");
        navigationService.changeMode(Navigation.Disabled);
    }


}