/**
 * Created by Michael on 27/08/2016.
 */
import {Component} from "@angular/core";
import {NavigationService} from "../shared/navigation/navigation.service";
import {NavigationType} from "../shared/navigation/navigation.type";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'home',
    templateUrl: "/app/home/home.component.html",
    styleUrls: ['app/home/home.component.css'],
    providers: [],
    //directives: []
})

export class HomeComponent{

    constructor(title:Title, navigationService: NavigationService) {
        title.setTitle("Comic Cloud");
        navigationService.changeMode(NavigationType.Disabled);
    }

}