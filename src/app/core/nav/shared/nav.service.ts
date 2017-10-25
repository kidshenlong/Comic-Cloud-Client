import { Injectable } from '@angular/core';
import { NavState } from './nav-state.enum';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class NavService {

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
