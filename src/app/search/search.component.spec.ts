import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import {NavState} from "../core/nav/shared/nav-state.enum";
import {NavService} from "../core/nav/shared/nav.service";
import {ActivatedRoute} from "@angular/router";
import {ActivatedRouteStub} from "../testing/router-stubs";
import {Observable} from "rxjs";

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    let navServiceStub = {
      navState: NavState.Authorised
    };

    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      providers: [
        { provide: NavService, useValue: navServiceStub },
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: Observable.of({query: 123})
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
