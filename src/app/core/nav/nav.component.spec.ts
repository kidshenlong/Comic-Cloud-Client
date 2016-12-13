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

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let de:      DebugElement;
  //let el:      HTMLElement;

  beforeEach(async(() => {
    let navServiceStub = {
      navState: NavState.Unauthorised
    };

    TestBed.configureTestingModule({
      imports: [CoreModule],
      //declarations: [ NavComponent],
      providers: [
        { provide: NavService, useValue: navServiceStub },
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('.ribbon'));

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('first test', async(() => {
    expect(de.nativeElement.children.length).toBeGreaterThan(0);
  }));
});
