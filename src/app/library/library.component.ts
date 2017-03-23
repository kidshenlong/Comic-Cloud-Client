import { Component, OnInit } from '@angular/core';
import {NavService} from "../core/nav/shared/nav.service";
import {NavState} from "../core/nav/shared/nav-state.enum";
import {Router} from "@angular/router";
import {Series} from "../series/shared/series";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  series: Series[];
  constructor(private navService: NavService, router: Router) { }

  ngOnInit() {
    this.navService.navState = NavState.Authorised;

    //this.series =
      this.getSeries();
  }

  getSeries(){
    console.log("series call");

    this.series = [
      { id: "8C3D3E48-155D-11E6-8248-564E36676F51", title: "Spider-Man", start_year: "2014", publisher: "Marvel", cover_image: "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"},
      { id: "8C3D3E48-155D-11E6-8248-564E36676F51", title: "Spider-Man", start_year: "2014", publisher: "Marvel", cover_image: "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"},
      { id: "8C3D3E48-155D-11E6-8248-564E36676F51", title: "Spider-Man", start_year: "2014", publisher: "Marvel", cover_image: "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"},
      { id: "8C3D3E48-155D-11E6-8248-564E36676F51", title: "Spider-Man", start_year: "2014", publisher: "Marvel", cover_image: "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"},
      { id: "8C3D3E48-155D-11E6-8248-564E36676F51", title: "Spider-Man", start_year: "2014", publisher: "Marvel", cover_image: "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"},
      { id: "8C3D3E48-155D-11E6-8248-564E36676F51", title: "Spider-Man", start_year: "2014", publisher: "Marvel", cover_image: "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"},
      { id: "8C3D3E48-155D-11E6-8248-564E36676F51", title: "Spider-Man", start_year: "2014", publisher: "Marvel", cover_image: "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"},
      { id: "8C3D3E48-155D-11E6-8248-564E36676F51", title: "Spider-Man", start_year: "2014", publisher: "Marvel", cover_image: "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"},
      { id: "8C3D3E48-155D-11E6-8248-564E36676F51", title: "Spider-Man", start_year: "2014", publisher: "Marvel", cover_image: "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"},
      { id: "8C3D3E48-155D-11E6-8248-564E36676F51", title: "Spider-Man", start_year: "2014", publisher: "Marvel", cover_image: "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"},
      { id: "8C3D3E48-155D-11E6-8248-564E36676F51", title: "Spider-Man", start_year: "2014", publisher: "Marvel", cover_image: "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"}
    ];
    //error =>  this.errorMessage = <any>error);
  }

}
