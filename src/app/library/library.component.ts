import { Component, OnInit } from '@angular/core';
import {NavService} from "../core/nav/shared/nav.service";
import {NavState} from "../core/nav/shared/nav-state.enum";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  constructor(private navServivce: NavService) { }

  ngOnInit() {
    this.navServivce.changeState(NavState.Authorised);
  }

}
