import {Component, OnInit} from "../../node_modules/angular2/core.d";
import {Title} from "../../node_modules/angular2/src/platform/browser/title.d";
import {Router} from "../../node_modules/angular2/router.d";
import {SeriesStackComponent} from './series-stack.component.ts';
//import {HeaderMenuComponent} from './header-menu.component';
import {Series} from "./series";
import {SeriesService} from "./series.service.ts";
import {HTTP_PROVIDERS} from "../../node_modules/angular2/http.d";

@Component({
    selector: 'library',
    host: {
        'class' : "shelf"
    },
    template: `
        <series-stack *ngFor="#thisSeries of series" [seriesObject]="thisSeries"></series-stack>
    `,
    styles :[``],
    providers: [Title, HTTP_PROVIDERS, SeriesService],
    directives: [SeriesStackComponent]
})

export class LibraryComponent implements OnInit {

    series: Series[];

    constructor(private _seriesService: SeriesService, title:Title) {
        title.setTitle("Comic Cloud - Library");//http://stackoverflow.com/questions/34602806/how-to-change-page-title-in-angular2-router
    }

    ngOnInit() {
        this.getSeries();
    }

    getSeries(){
        console.log("series call");
        this._seriesService.getAllSeries().subscribe(series => this.series = series);
                //error =>  this.errorMessage = <any>error);
    }
}