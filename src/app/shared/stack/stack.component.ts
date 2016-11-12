import {Component, Input} from '@angular/core';

@Component({
    selector: 'stack',
    templateUrl: 'stack.component.html',//todo Refactor to be relative
    styleUrls: ['stack.component.css'],
    host: {
        'class': 'stack'
    },
    //directives: [ROUTER_DIRECTIVES]
    //providers: [RouteParams, RouterLink]
})
export class StackComponent {
    //@Input() //Declares a data-bound input property.
    @Input() stackData: string[];//todo this type should ideally be an abstract class that all stack types (ie comic, series, reading list) implement
    @Input() stackType: string;
    @Input() stackImage: string;

    isStackImageLoaded: boolean = false;

    stackImageLoaded(event){
        this.isStackImageLoaded = true;
        console.log(event);
    }
}