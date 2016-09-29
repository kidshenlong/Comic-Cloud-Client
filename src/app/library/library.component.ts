/**
 * Created by Michael on 08/05/2016.
 */
import {Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {SeriesService, Series} from "../series";

import {Navigation, NavigationService, StackComponent, UploadService} from '../shared'

import {Observable} from "rxjs/Observable";

@Component({
    selector: 'library',
    host: { 'class' : "shelf2" },
    templateUrl: "library.component.html",
    styleUrls: ['library.component.css'],
    providers: [SeriesService, UploadService],
})

export class LibraryComponent implements OnInit {

    //stackType = "series";//todo consider making stack type a parameter set by component

    //series: Series[];
    series: Observable<Series[]>;

    isTransparent: boolean = false;

    fileOver(e){
        this.isTransparent = e;

    }

    constructor(private _seriesService: SeriesService, title:Title, navigationService: NavigationService, public uploadService: UploadService) {
        title.setTitle("Comic Cloud - Library");
        navigationService.changeMode(Navigation.Library);

        uploadService.uploader.onCompleteAll = () => {
            console.log('complete');
        };

    }

    ngOnInit() {
        //this.series = this.getAllSeries();

        this.series = this._seriesService.getAllSeries();
    }
}