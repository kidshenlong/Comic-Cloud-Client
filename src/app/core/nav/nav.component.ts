import { Component, OnInit } from '@angular/core';
import { NavService } from './shared/nav.service';
import { NavState } from './shared/nav-state.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  navStateType = NavState;

  constructor(public navService: NavService, private router: Router) { }
}
