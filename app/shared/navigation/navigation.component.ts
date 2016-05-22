import {Component, Input} from "@angular/core";
import {OnActivate, Router, RouteSegment, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "@angular/router";
import {NavigationService} from "./navigation.service";
import {NavigationType} from "./navigation.type";

@Component({
    selector: 'navigation',
    templateUrl: "/app/shared/navigation/navigation.component.html",
    styleUrls: ["app/shared/navigation/navigation.component.css"], //todo styleUrls doesn't currently support absolute paths.
    providers: [ROUTER_PROVIDERS]//, NavigationService]
})
export class NavigationComponent {//implements OnActivate {
    //private _currentPage;
    /*routerOnActivate(curr: RouteSegment): void {
        console.log("lol");
        console.log(curr);
    }*/

    //constructor(private router: Router) {
        /*router.changes.subscribe(() => {
         console.log("change places!")
         });*/
    //}
    //mode = "nothing";
    navigationType = NavigationType;
    mode: NavigationType;


    constructor(private navigationService: NavigationService) {
        //navigationService.navigationMode$.subscribe( mode => this.mode = mode)
        /*navigationService.changeMode("home");
        this.mode = navigationService.mode*/


        navigationService.navigationMode$.subscribe(newMode => {
            this.mode = <NavigationType>newMode
        })
    }
}
