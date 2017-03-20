import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NavState} from "../core/nav/shared/nav-state.enum";
import {NavService} from "../core/nav/shared/nav.service";

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  private selectedSeriesId: string;

  constructor(private navService: NavService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.navService.navState = NavState.Authorised;
    this.route.params.subscribe( params => this.selectedSeriesId = params['id']);
  }

}
