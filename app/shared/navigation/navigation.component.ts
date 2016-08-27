import {Component} from "@angular/core";
import {NavigationService} from "./navigation.service";
import {NavigationType} from "./navigation.type";

@Component({
    selector: 'navigation',
    templateUrl: "/app/shared/navigation/navigation.component.html",
    styleUrls: ["app/shared/navigation/navigation.component.css"], //todo styleUrls doesn't currently support absolute paths.
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
            // Type assertions: ttps://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#416-type-assertions
            //this.mode = <NavigationType>newMode
            //this.mode = <NavigationType>newMode
            //this.mode = newMode as NavigationType //todo revisit why this is an error
            //http://stackoverflow.com/questions/17380845/how-to-convert-string-to-enum-in-typescript
            this.mode = <NavigationType>NavigationType[newMode];
        })
    }
}
