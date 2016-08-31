import {Component} from "@angular/core";
import {NavigationService} from "./navigation.service";
import {NavigationType} from "./navigation.type";
import {AuthenticationService} from "../authentication/authentication.service";
import {Router} from "@angular/router";

@Component({
    selector: 'navigation',
    templateUrl: "/app/shared/navigation/navigation.component.html",
    styleUrls: ["app/shared/navigation/navigation.component.css"], //todo styleUrls doesn't currently support absolute paths.
})
export class NavigationComponent {

    navigationType = NavigationType;
    mode: NavigationType;


    constructor(private navigationService: NavigationService, public authenticationService: AuthenticationService,  private router: Router) {
        navigationService.navigationMode$.subscribe(newMode => {
            //Type assertions: ttps://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#416-type-assertions
            //http://stackoverflow.com/questions/17380845/how-to-convert-string-to-enum-in-typescript
            this.mode = <NavigationType>NavigationType[newMode];
        })
    }

    logout(){
        this.authenticationService.logout().subscribe(
            response => this.router.navigate(['/login']),
            error => alert(error)
        );
        return false;
    }
}
