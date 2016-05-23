/**
 * Created by Michael on 23/05/2016.
 */
import {Component, OnInit, ElementRef} from "@angular/core";

@Component({
    selector: 'comic-navigation',
    templateUrl: '/app/comic/comic-navigation/comic-navigation.component.html',
    styleUrls: ['app/comic/comic-navigation/comic-navigation.component.css'],
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})

export class ComicNavigationComponent {

    menuIsVisible:boolean;

    constructor(private elementRef: ElementRef) {
    }

    onMouseEnter() {
        //var t = this.elementRef.nativeElement.children;
        //console.log(t);
        this.menuIsVisible = true;

    }
    onMouseLeave() {
        this.menuIsVisible = false;
    }
}