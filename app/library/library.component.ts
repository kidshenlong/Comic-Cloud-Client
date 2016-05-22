/**
 * Created by Michael on 08/05/2016.
 */
import {Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {Router} from "@angular/router";
import {HTTP_PROVIDERS} from "@angular/http";
import {SeriesService} from "../series/series.service";
import {Series} from "../series/series.model";
import {StackComponent} from "../shared/stack/stack.component";
import {NavigationService} from "../shared/navigation/navigation.service";
import {NavigationType} from "../shared/navigation/navigation.type";

@Component({
    selector: 'library',
    host: { 'class' : "shelf" },
    templateUrl: "/app/library/library.component.html",
    styleUrls: ['app/library/library.component.css'],
    providers: [Title, HTTP_PROVIDERS, SeriesService],
    directives: [StackComponent]
})

export class LibraryComponent implements OnInit {

    //stackType = "series";//todo consider making stack type a parameter set by component

    series: Series[];

    constructor(private _seriesService: SeriesService, title:Title, navigationService: NavigationService) {
        title.setTitle("Comic Cloud - Library");
        navigationService.changeMode(NavigationType.Library);
    }

    ngOnInit() {
        this.series = this.getSeries();
    }

    getSeries(){
        console.log("series call");
        //this._seriesService.getAllSeries().subscribe(series => this.series = series);
        return [
            new Series("8C3D3E48-155D-11E6-8248-564E36676F51", "Spider-Man", 2014, "Marvel", "1", "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"),
            new Series("8C3D3E48-155D-11E6-8248-564E36676F51", "Spider-Man", 2014, "Marvel", "1", "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"),
            new Series("8C3D3E48-155D-11E6-8248-564E36676F51", "Spider-Man", 2014, "Marvel", "1", "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"),
            new Series("8C3D3E48-155D-11E6-8248-564E36676F51", "Spider-Man", 2014, "Marvel", "1", "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"),
            new Series("8C3D3E48-155D-11E6-8248-564E36676F51", "Spider-Man", 2014, "Marvel", "1", "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"),
            new Series("8C3D3E48-155D-11E6-8248-564E36676F51", "Spider-Man", 2014, "Marvel", "1", "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"),
            new Series("8C3D3E48-155D-11E6-8248-564E36676F51", "Spider-Man", 2014, "Marvel", "1", "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"),
            new Series("8C3D3E48-155D-11E6-8248-564E36676F51", "Spider-Man", 2014, "Marvel", "1", "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"),
            new Series("8C3D3E48-155D-11E6-8248-564E36676F51", "Spider-Man", 2014, "Marvel", "1", "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"),
            new Series("8C3D3E48-155D-11E6-8248-564E36676F51", "Spider-Man", 2014, "Marvel", "1", "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"),
            new Series("8C3D3E48-155D-11E6-8248-564E36676F51", "Spider-Man", 2014, "Marvel", "1", "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"),
            new Series("8C3D3E48-155D-11E6-8248-564E36676F51", "Spider-Man", 2014, "Marvel", "1", "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"),
        ];
        //error =>  this.errorMessage = <any>error);
    }
}