import { Component, OnInit } from '@angular/core';
import {NavService} from "../core/nav/shared/nav.service";
import {NavState} from "../core/nav/shared/nav-state.enum";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  //query: Observable<string>;
  query: string = "spider-man";

  constructor(private navService: NavService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.navService.navState = NavState.Authorised;
    this.route.queryParams.subscribe(params => this.query = params['query']);
  }

}
