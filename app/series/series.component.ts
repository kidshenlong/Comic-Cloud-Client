/**
 * Created by Michael on 08/05/2016.
 */
import {Component, OnInit} from "angular2/core";
import {Title} from "angular2/platform/browser";
import {Router} from "angular2/router";
import {HTTP_PROVIDERS} from "angular2/http";
import {SeriesService} from "./series.service";
import {Series} from "./series";

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
    //directives: [SeriesStackComponent]
})

export class SeriesComponent implements OnInit {

    series: Series[];

    constructor(private _seriesService: SeriesService, title:Title) {
        //http://stackoverflow.com/questions/34602806/how-to-change-page-title-in-angular2-router
        title.setTitle("Comic Cloud - Library");
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