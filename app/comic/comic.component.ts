/**
 * Created by Michael on 08/05/2016.
 */
import {Component, OnInit} from "angular2/core";
import {Title} from "angular2/platform/browser";
import {Router} from "angular2/router";
import {HTTP_PROVIDERS} from "angular2/http";
import {Comic} from "./comic";
import {RouteParams} from "angular2/router";
import {ComicStackComponent} from "./comic-stack/comic-stack.component";
import {SeriesService} from "../series/series.service";

@Component({
    selector: 'library',
    host: { 'class' : "shelf" },
    template: `
        <comic-stack *ngFor="#comic of comics" [comicObject]="comic"></comic-stack>
    `,
    styles :[``],
    providers: [Title, HTTP_PROVIDERS, SeriesService],
    directives: [ComicStackComponent]
})

export class ComicComponent implements OnInit {

    comics: Comic[];

    constructor(private routeParams: RouteParams, private _seriesService: SeriesService, title:Title) {
        //http://stackoverflow.com/questions/34602806/how-to-change-page-title-in-angular2-router

        title.setTitle("Comic Cloud - " + this.getComicSeriesName(routeParams.get('id')));
    }

    ngOnInit() {
        this.comics = this.getComics(this.routeParams.get('id'));
    }

    getComics(series_id: String){
        console.log("series_id  " + series_id);
        console.log("comic call");
        return [
            new Comic("905B5C64-1560-11E6-A89C-564E36676F51", 1, null,["http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"], "8C3D3E48-155D-11E6-8248-564E36676F51", "1", "complete"),
        ];
    }

    getComicSeriesName(series_id: String){
        //var series_name = _seriesService.getSeries(this.routeParams.get('id'))...
        return "Amazing Spider-Man (2014)"
    }
}