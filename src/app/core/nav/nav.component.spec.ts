/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed, fakeAsync, tick} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavComponent } from './nav.component';
import {NavService} from "./shared/nav.service";
import {NavState} from "./shared/nav-state.enum";
import {CommonModule, NgIf} from "@angular/common";
import {CoreModule} from "../core.module";

import { ComponentFixtureAutoDetect } from '@angular/core/testing';

let component: NavComponent;
let fixture: ComponentFixture<NavComponent>;
let de:      DebugElement;
let navService: NavService;

describe('NavComponent', () => {

  beforeEach(async(() => {
    let navServiceStub = {
      navState: NavState.Unauthorised
    };

    TestBed.configureTestingModule({
      imports: [CoreModule],
      providers: [
        { provide: NavService, useValue: navServiceStub },
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;

    navService = TestBed.get(NavService);

  }));

  beforeEach(() => {

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be visible if the navState is Unauthorised', async(() => {
    de = fixture.debugElement.query(By.css('.ribbon'));
    expect(de.nativeElement.children.length).toBeGreaterThan(0);
  }));

  it('should not be visible if the navState is Disabled', () => {

    navService.navState = NavState.Disabled;

    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('.ribbon'));

    expect(de).toBeNull();

  });

  it('should be visible if the navState is Authorised', () => {

    navService.navState = NavState.Authorised;

    de = fixture.debugElement.query(By.css('.ribbon'));

    expect(de.nativeElement.children.length).toBeGreaterThan(0);
  });

});
