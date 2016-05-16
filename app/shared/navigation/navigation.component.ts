import {Component, Input} from "@angular/core";
import {OnActivate, Router, RouteSegment} from "@angular/router";


@Component({
    selector: 'navigation',
    templateUrl: "/app/shared/navigation/navigation.component.html",
    styleUrls: ["app/shared/navigation/navigation.component.css"] //todo styleUrls doesn't currently support absolute paths.
})
export class NavigationComponent implements OnActivate {
    routerOnActivate(curr: RouteSegment): void {

    }
}
