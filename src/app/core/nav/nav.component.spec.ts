/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed, fakeAsync, tick} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavComponent } from './nav.component';
import {NavService} from "./shared/nav.service";
import {NavState} from "./shared/nav-state.enum";
import {CommonModule, NgIf} from "@angular/common";
import {CoreModule} from "../core.module";

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let de:      DebugElement;
  //let el:      HTMLElement;

  beforeEach(async(() => {
    let navServiceStub = {
      navState: NavState.Authorised
    };

    TestBed.configureTestingModule({
      imports: [CoreModule],
      //declarations: [ NavComponent],
      providers: [
        { provide: NavService, useValue: navServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('.ribbon'));

    //console.log("value " + component.navStateType);

    //el = de.nativeElement;

    //fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('first test', fakeAsync(() => {
    //    expect(heroEl.nativeElement.textContent).toContain(expectedPipedName);

    /*
     fixture.detectChanges();
     //fixture.whenStable().then(() => { // wait for async getQuote
     fixture.detectChanges();        // update view with quote
     //expect(el.textContent).toBe(testQuote);
     expect(debug.nativeElement.children.length).toBeGreaterThan(0)
     //});
     */
    /*fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(de.nativeElement.children.length).toBeGreaterThan(0)
    });*/

    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    tick();tick();tick();
    fixture.detectChanges();

    expect(de.nativeElement.children.length).toBeGreaterThan(0);

  }));

  /*it('should display original title', () => {
    fixture.detectChanges();
    expect(fixture).toContain("");
  });*/

});
