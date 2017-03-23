import {Component, OnInit, Input} from '@angular/core';
import {Series} from "../shared/series";

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.scss']
})
export class SeriesListComponent implements OnInit {

  @Input() private series: [Series];

  constructor() { }

  ngOnInit() {
  }

}
