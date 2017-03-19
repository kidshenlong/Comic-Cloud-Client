import { Component, OnInit } from '@angular/core';
import {NavService} from "../core/nav/shared/nav.service";
import {NavState} from "../core/nav/shared/nav-state.enum";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private navService: NavService) { }

  ngOnInit() {
    this.navService.navState = NavState.Authorised;
  }

}
