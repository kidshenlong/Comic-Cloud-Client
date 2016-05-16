import {Component, Input} from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    selector: 'stack',
    templateUrl: '/app/shared/stack/stack.component.html',//todo Refactor to be relative
    styleUrls: ['app/shared/stack/stack.component.css'],
    host: {
        'class': 'stack'
    },
    directives: [ROUTER_DIRECTIVES]
    //providers: [RouteParams, RouterLink]
})
export class StackComponent {
    //@Input() //Declares a data-bound input property.
    @Input() stackData: string[];//todo this type should ideally be an abstract class that all stack types (ie comic, series, reading list) implement
    @Input() stackType: string;

}