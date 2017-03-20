import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesComponent } from './series.component';
import {NavState} from "../core/nav/shared/nav-state.enum";
import {NavService} from "../core/nav/shared/nav.service";
import {ActivatedRouteStub} from "../testing/router-stubs";
import {ActivatedRoute} from "@angular/router";

describe('SeriesComponent', () => {
  let component: SeriesComponent;
  let fixture: ComponentFixture<SeriesComponent>;

  beforeEach(async(() => {
    let navServiceStub = {
      navState: NavState.Authorised
    };


    let activatedRoute = new ActivatedRouteStub();

    activatedRoute.testParams = { id: "uuid" };


    TestBed.configureTestingModule({
      declarations: [ SeriesComponent ],
      providers: [
        { provide: NavService, useValue: navServiceStub },
        { provide: ActivatedRoute, useValue:  activatedRoute}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
