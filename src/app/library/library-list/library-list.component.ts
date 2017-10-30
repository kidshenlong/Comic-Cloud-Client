import { Component, Input, OnInit } from '@angular/core';
import { Series } from '../../shared/series/series.model';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.scss']
})
export class LibraryListComponent implements OnInit {

  @Input() series: [Series];

  constructor() { }

  ngOnInit() {
  }

}
