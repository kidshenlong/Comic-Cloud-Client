/* tslint:disable:directive-selector-prefix */
/* tslint:disable:component-selector-prefix */

// https://github.com/angular/angular.io/blob/master/public/docs/_examples/testing/ts/testing/router-stubs.ts
// export for convenience.
import {Observable} from "rxjs";
export { ActivatedRoute, Router, RouterLink, RouterOutlet} from '@angular/router';

import {Component, Directive, Injectable, Input, HostListener} from '@angular/core';
import {NavigationExtras} from '@angular/router';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

// #docregion router-link
@Directive({
  selector: '[routerLink]'
})
export class RouterLinkStubDirective {
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;

  @HostListener('click') onClick() {
    this.navigatedTo = this.linkParams;
  }
}
// #enddocregion router-link

@Component({selector: 'router-outlet', template: ''})
export class RouterOutletStubComponent {}

@Injectable()
export class RouterStub {
  events: Observable<Event> = Observable.from([]);
  navigate(commands: any[], extras?: NavigationExtras) { }
}


// Only implements params and part of snapshot.params
// #docregion activated-route-stub

@Injectable()
export class ActivatedRouteStub {

  // ActivatedRoute.params is Observable
  private subject = new BehaviorSubject(this.testParams);
  params = this.subject.asObservable();

  // Test parameters
  private _testParams: {};
  get testParams() { return this._testParams; }
  set testParams(params: {}) {
    this._testParams = params;
    this.subject.next(params);
  }

  // ActivatedRoute.snapshot.params
  get snapshot() {
    return { params: this.testParams };
  }
}
// #enddocregion activated-route-stub
