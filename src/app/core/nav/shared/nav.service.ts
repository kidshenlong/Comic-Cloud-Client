import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {NavState} from "./nav-state.enum";

@Injectable()
export class NavService {

  private navigationStateSource = new Subject<string>();

  navigationState$ = this.navigationStateSource.asObservable();

  constructor() {}

  changeState(state: NavState){
    this.navigationStateSource.next(NavState[state]);
  }

}
