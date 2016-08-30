/**
 * Created by Michael on 08/05/2016.
 */
import {Component, OnInit, OnDestroy} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {Comic} from "./../comic/comic.model";
import {SeriesService} from "./series.service";
import {Series} from "./series.model";
import {StackComponent} from "../shared/stack/stack.component";
import {NavigationService} from "../shared/navigation/navigation.service";
import {NavigationType} from "../shared/navigation/navigation.type";

@Component({
    selector: 'library',
    host: { 'class' : "shelf" },
    templateUrl: "/app/series/series.component.html",
    providers: [Title, SeriesService],
    directives: [StackComponent]
})

export class SeriesComponent implements OnInit{
    currentSeries: Series;
    comics: Comic[];
    title: Title;


    constructor(private _seriesService: SeriesService, title:Title, navigationService: NavigationService, private route: ActivatedRoute, private router: Router) {
        this.title = title;
        navigationService.changeMode(NavigationType.Library);
    }

    ngOnInit(){
        this.route.params.subscribe(params => {
            let id = params['id'];
            this.currentSeries = this.getSeries(id);
            this.title.setTitle("Comic Cloud - " + this.currentSeries.title + " (" + this.currentSeries.start_year + ")");
            this.comics = this.getComics(id);
        });

    }

    getComics(series_id: string){
        console.log("series_id " + series_id);
        console.log("comic call");
        return [
            new Comic("905B5C64-1560-11E6-A89C-564E36676F51", 1, null,["http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"], "8C3D3E48-155D-11E6-8248-564E36676F51", "1", "complete"),
            new Comic("905B5C64-1560-11E6-A89C-564E36676F52", 2, null,["http://i.annihil.us/u/prod/marvel/i/mg/6/b0/537270c2cf77f/detail.jpg"], "8C3D3E48-155D-11E6-8248-564E36676F51", "1", "complete"),
            new Comic("905B5C64-1560-11E6-A89C-564E36676F53", 3, null,["http://x.annihil.us/u/prod/marvel/i/mg/4/60/539765882db8b/detail.jpg"], "8C3D3E48-155D-11E6-8248-564E36676F51", "1", "complete"),
            new Comic("905B5C64-1560-11E6-A89C-564E36676F54", 4, null,["http://i.annihil.us/u/prod/marvel/i/mg/5/03/53c424e569105/detail.jpg"], "8C3D3E48-155D-11E6-8248-564E36676F51", "1", "complete"),
            new Comic("905B5C64-1560-11E6-A89C-564E36676F55", 5, null,["http://i.annihil.us/u/prod/marvel/i/mg/6/c0/53dbe3834297d/detail.jpg"], "8C3D3E48-155D-11E6-8248-564E36676F51", "1", "complete")
            /*new Comic("905B5C64-1560-11E6-A89C-564E36676F51", 1, null,["http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"], "8C3D3E48-155D-11E6-8248-564E36676F51", "1", "complete"),
            new Comic("905B5C64-1560-11E6-A89C-564E36676F51", 1, null,["http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"], "8C3D3E48-155D-11E6-8248-564E36676F51", "1", "complete"),
            new Comic("905B5C64-1560-11E6-A89C-564E36676F51", 1, null,["http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"], "8C3D3E48-155D-11E6-8248-564E36676F51", "1", "complete"),
            new Comic("905B5C64-1560-11E6-A89C-564E36676F51", 1, null,["http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"], "8C3D3E48-155D-11E6-8248-564E36676F51", "1", "complete"),*/
        ];
    }

    getSeries(series_id: string){
        return new Series(series_id, "Spider-Man", 2014, "Marvel", "1", "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg");
    }

}