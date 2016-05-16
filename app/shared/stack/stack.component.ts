import {Component, Input} from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    selector: 'stack',
    templateUrl: '/app/shared/stack/stack.component.html',//todo Refactor to be relative
    host: {
        'class': 'stack'
    },
    styles: [`

    `],
    directives: [ROUTER_DIRECTIVES]
    //providers: [RouteParams, RouterLink]
})
export class StackComponent {
    //@Input() //Declares a data-bound input property.
    @Input() stackData: string[];//todo this should ideally be an abstract class that all stacks implement
    @Input() stackType: string;

}