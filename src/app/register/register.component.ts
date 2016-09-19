/**
 * Created by Michael on 27/08/2016.
 */
import {Component} from "@angular/core";
import {Title} from "@angular/platform-browser";

import {Navigation, NavigationService, AuthenticationService} from "../shared";

@Component({
    selector: 'register',
    templateUrl: "register.component.html",
    styleUrls: ['register.component.css'],
    providers: [],
})

export class RegisterComponent{

    constructor(title:Title, navigationService: NavigationService, public authenticationService: AuthenticationService) {
        title.setTitle("Comic Cloud - Register");
        navigationService.changeMode(Navigation.Disabled);
    }


}