import { Component, OnInit } from '@angular/core';
import {NavState} from "./shared/nav-state.enum";
import {NavService} from "./shared/nav.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  navStateType = NavState;
  navState: NavState = NavState.Disabled;

  constructor(private navService: NavService) {
  }

  ngOnInit() {
    this.navService.navigationState$.subscribe(state => this.navState = NavState[state]);
  }

}
