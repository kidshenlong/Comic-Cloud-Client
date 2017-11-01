import { Component, Input, OnInit } from '@angular/core';
import { Comic } from '../../shared/comics/comic.model';

@Component({
  selector: 'app-library-featured-list',
  templateUrl: './library-featured-list.component.html',
  styleUrls: ['./library-featured-list.component.scss']
})
export class LibraryFeaturedListComponent implements OnInit {

  @Input() featuredComics: [Comic];
  constructor() { }

  ngOnInit() {
  }

}
