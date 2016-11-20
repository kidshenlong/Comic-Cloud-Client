import { Injectable } from '@angular/core';
import {Subject, Observable} from "rxjs";
import {NavState} from "./nav-state.enum";

@Injectable()
export class NavService {

  /*private navigationStateSource = new Subject<string>();

  navigationState$ = this.navigationStateSource.asObservable();

  constructor() {}

  changeState(state: NavState){
    this.navigationStateSource.next(NavState[state]);
  }*/

  private _navState: NavState = NavState.Disabled;
  private _navStateSource = new Subject<String>();

  constructor() {
    this._navStateSource.subscribe(res => this._navState = NavState[res.toString()]);
  }

  get navState(): NavState {
    return this._navState;
  }

  set navState(state) {
    this._navStateSource.next(NavState[state]);
  }

}
