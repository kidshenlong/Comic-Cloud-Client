import {Component, OnInit} from "angular2/core";
import {Title} from "angular2/src/platform/browser/title";
import {Router} from "angular2/router";
import {SeriesStackComponent} from './series-stack.component';
//import {HeaderMenuComponent} from './header-menu.component';
import {Series} from "./series";

@Component({
    selector: 'library',
    /*template: `
        <ul id="seriesStack">
            <li *ngFor="#thisSeries of series">
                <series-stack [seriesObject]="thisSeries"></series-stack>
            </li>
        </ul>
    `,*/
    host: {
        'class' : "shelf"
    },
    template: `
        <series-stack *ngFor="#thisSeries of series" [seriesObject]="thisSeries"></series-stack>
    `,
    styles :[``],
    providers: [Title],
    directives: [SeriesStackComponent]
})
export class LibraryComponent implements OnInit {
    public series: Series[];

    constructor(title:Title) {
        title.setTitle("Comic Cloud - Library");//http://stackoverflow.com/questions/34602806/how-to-change-page-title-in-angular2-router
    }

    ngOnInit() {
        this.getSeries();
    }

    getSeries(){
        console.log("series call");
        this.series = [
            new Series("123", "Superman", "https://placekitten.com/400/585"),
            new Series("123", "Superman", "https://placekitten.com/400/585"),
            new Series("123", "Superman", "https://placekitten.com/400/585"),
            new Series("123", "Superman", "https://placekitten.com/400/585"),
            new Series("123", "Superman", "https://placekitten.com/400/585"),
            new Series("123", "Superman", "https://placekitten.com/400/585"),
            new Series("123", "Superman", "https://placekitten.com/400/585"),
            new Series("124", "Spider-man", "https://placekitten.com/400/585")
        ];
    }
}