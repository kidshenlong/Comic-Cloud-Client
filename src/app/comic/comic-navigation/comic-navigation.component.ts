import {Component, OnInit, ElementRef} from "@angular/core";
import {ComicStateService} from "../comic-state/comic-state.service";

@Component({
    selector: 'comic-navigation',
    templateUrl: 'comic-navigation.component.html',
    styleUrls: ['comic-navigation.component.css'],
    providers: [],
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})

export class ComicNavigationComponent {

    hidden = false;

    constructor(private elementRef: ElementRef, private comicStateService: ComicStateService) {

    }

    private onMouseEnter() {
        //this.hidden = false;

    }
    private onMouseLeave() {
        //this.hidden = true;
    }
}