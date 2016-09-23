/**
 * Created by Michael on 08/05/2016.
 */
import {Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";

import {SeriesService, Series} from "../series";
import {Navigation, NavigationService, UploadService} from '../shared'

import {FileSelectDirective, FileDropDirective, FileUploader} from 'ng2-file-upload/ng2-file-upload';
import { UUID } from 'angular2-uuid';
import {SortBySeriesTitlePipe} from "../series/sort-by-series-title.pipe";

@Component({
    selector: 'library',
    host: { 'class' : "shelf2" },
    templateUrl: "library.component.html",
    styleUrls: ['library.component.css'],
    providers: [SeriesService, UploadService]
})

export class LibraryComponent implements OnInit {

    //stackType = "series";//todo consider making stack type a parameter set by component

    series: Series[];

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

        uploadService.uploader.onBeforeUploadItem = (file) => {
            console.log("about to upload: " + file.file.name);

            //file.file.name="120938102938"
            //alterFileName();
            //addSeries();
            this.addSeries("New Series", UUID.UUID(), 2016);
        };

        uploadService.uploader.onBuildItemForm = (item, form) => {
            form.append("name", "lolwut");
        };

    }

    addSeries(seriesTitle: string, seriesId: string, startYear: number){
        var newSeries = new Series(seriesId, seriesTitle, startYear, "Unknown", null, "");
        this.series.push(newSeries);
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
            new Series("8C3D3E48-155D-11E6-8248-564E36676F51", "Amazing Spider-Man", 2014, "Marvel", "1", "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"),
            new Series("8C3D3E48-155D-11E6-8248-564E36676F51", "Spider-Man", 2014, "Marvel", "1", "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"),
            new Series("8C3D3E48-155D-11E6-8248-564E36676F51", "Spider-Man", 2014, "Marvel", "1", "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"),
            new Series("8C3D3E48-155D-11E6-8248-564E36676F51", "Spider-Man", 2014, "Marvel", "1", "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"),
            new Series("8C3D3E48-155D-11E6-8248-564E36676F51", "Spider-Man", 2014, "Marvel", "1", "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"),
        ];
        //error =>  this.errorMessage = <any>error);
    }
}