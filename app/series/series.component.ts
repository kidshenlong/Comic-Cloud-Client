/**
 * Created by Michael on 08/05/2016.
 */
import {Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {OnActivate, Router, RouteSegment} from "@angular/router";
import {HTTP_PROVIDERS} from "@angular/http";
import {Comic} from "./../comic/comic.model";
//import {Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteParams} from '@angular/router';
import {ComicStackComponent} from "../comic-stack/comic-stack.component";
import {SeriesService} from "./series.service";
import {Series} from "./series.model";

@Component({
    selector: 'library',
    host: { 'class' : "shelf" },
    template: `
        <comic-stack *ngFor="let comic of comics" [comicObject]="comic"></comic-stack>
    `,
    styles :[``],
    providers: [Title, HTTP_PROVIDERS, SeriesService],
    directives: [ComicStackComponent]
})

export class SeriesComponent implements OnActivate{//OnInit {

    comics: Comic[];
    parentSeries: Series;

    constructor(private _seriesService: SeriesService, title:Title) {

    }

    routerOnActivate(curr: RouteSegment): void {
        this.parentSeries = this.getComicsParentSeries(curr.getParam('id'));
        //title.setTitle("Comic Cloud - " + this.parentSeries.title + " (" + this.parentSeries.start_year + ")"); //todo extract to method
    }

    /*constructor(private routeParams: RouteParams, private _seriesService: SeriesService, title:Title) {
        this.parentSeries = this.getComicsParentSeries(routeParams.get('id'));
        title.setTitle("Comic Cloud - " + this.parentSeries.title + " (" + this.parentSeries.start_year + ")"); //todo extract to method
    }*/

    /*constructor(private router: Router){

    }*/

    ngOnInit() {
        //this.comics = this.getComics(this.routeParams.get('id'));
    }

    getComics(series_id: string){
        console.log("series_id  " + series_id);
        console.log("comic call");
        return [
            new Comic("905B5C64-1560-11E6-A89C-564E36676F51", 1, null,["http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"], "8C3D3E48-155D-11E6-8248-564E36676F51", "1", "complete"),
        ];
    }

    getComicsParentSeries(series_id: string){
        //var series_name = _seriesService.getSeries(this.routeParams.get('id'))...
        return new Series(series_id, "Spider-Man", 2014, "Marvel", "1", "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg");
    }
}