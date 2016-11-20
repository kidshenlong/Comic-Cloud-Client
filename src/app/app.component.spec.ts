/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {NavComponent} from "./core/nav/nav.component";
import {RouterOutletStubComponent, RouterLinkStubDirective, RouterStub} from "./testing/router-stubs";
import {Router} from "@angular/router";
import {NavService} from "./core/nav/shared/nav.service";

describe('App: ComicCloudClientAngular2', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RouterOutletStubComponent,
        RouterLinkStubDirective,
        NavComponent
      ],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: NavService}
      ]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
