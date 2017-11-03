import { Component, Input, OnInit } from '@angular/core';
import { Comic } from '../../shared/comics/comic.model';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.scss']
})
export class SeriesListComponent implements OnInit {

  @Input() comics: [Comic];

  constructor() { }

  ngOnInit() {
  }

}
