import { Component, OnInit } from '@angular/core';
import { NavState } from '../core/nav/shared/nav-state.enum';
import { Title } from '@angular/platform-browser';
import { NavService } from '../core/nav/shared/nav.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  constructor(private navService: NavService, private titleService: Title ) { }

  ngOnInit() {
    this.titleService.setTitle( 'Comic Cloud - Series' );
    this.navService.navState = NavState.Authorised;
  }

}
