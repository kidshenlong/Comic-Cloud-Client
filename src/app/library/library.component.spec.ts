/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LibraryComponent } from './library.component';
import {NavService} from "../core/nav/shared/nav.service";
import {NavState} from "../core/nav/shared/nav-state.enum";
import {LibraryFeaturedComponent} from "./library-featured/library-featured.component";
import {ComicComponent} from "../shared/comic/comic.component";

describe('LibraryComponent', () => {
  let component: LibraryComponent;
  let fixture: ComponentFixture<LibraryComponent>;

  beforeEach(async(() => {
    let navServiceStub = {
      navState: NavState.Authorised
    };

    TestBed.configureTestingModule({
      declarations: [ LibraryComponent, LibraryFeaturedComponent, ComicComponent ],
      providers: [
        { provide: NavService, useValue: navServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
