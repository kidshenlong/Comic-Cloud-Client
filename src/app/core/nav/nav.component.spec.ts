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
  let navService: NavService;

  beforeEach(async(() => {
    let navServiceStub = {
      navState: NavState.Unauthorised
    };

    TestBed.configureTestingModule({
      imports: [CoreModule],
      //declarations: [ NavComponent],
      providers: [
        { provide: NavService, useValue: navServiceStub }/*,
        { provide: ComponentFixtureAutoDetect, useValue: true }*/
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;

    //navService = fixture.debugElement.injector.get(NavService);
    navService = TestBed.get(NavService);

    //fixture.detectChanges();

    fixture.detectChanges();
    return fixture.whenStable().then(() => {
      // 2nd change detection displays the async-fetched hero
      fixture.detectChanges();
    });

  }));

  beforeEach(() => {

  });

/*  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('first test', () => {
    expect(de.nativeElement.children.length).toBeGreaterThan(0);
  });*/

  /*it(' test', () => {
    expect("").toBe("");
  });*/

  /*it('second test', async(() => {
    /!*navService.navState = NavState.Disabled;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        console.log(de.nativeElement.children.length);
        console.log(de.nativeElement);
        expect(de.nativeElement.children.length).toBe(0);
      });
    });

  *!/

    /!*fixture.whenStable().then(() => {
      navService.navState = NavState.Disabled;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        console.log(de.nativeElement);
      });
    });*!/
    navService.navState = NavState.Disabled;
    //fixture.detectChanges();
    console.log(de.nativeElement);

  }));*/

  /*it('second test', fakeAsync(() => {

    //navService.navState = NavState.Disabled;
/!*    fixture.detectChanges();
    tick();
    fixture.detectChanges();
  *!/




    setTimeout(() => console.log(de.nativeElement), 100);

  }));*/

  it('second test', async(() => {
    de = fixture.debugElement.query(By.css('.ribbon'));

    //navService.navState = NavState.Authorised;
    //fixture.detectChanges();

    //console.log(de.nativeElement.children.length);
    //console.log(de.nativeElement);
    expect(de.nativeElement.children.length).toBeGreaterThan(0);

  }));

  it('third test', () => {
    //de = fixture.debugElement.query(By.css('.ribbon'));

    navService.navState = NavState.Disabled;
    //fixture.detectChanges();

    //console.log(de.nativeElement.children.length);
    /*console.log(de.nativeElement);
    expect(de.nativeElement.children.length).toBeGreaterThan(0);*/

    //return fixture.whenStable().then(() => {
      // 2nd change detection displays the async-fetched hero
      fixture.detectChanges();

    de = fixture.debugElement.query(By.css('.ribbon'));

      expect(de).toBeNull();
    //});

  });


/*  it('first test', fakeAsync(() => {

    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    tick();tick();tick();
    fixture.detectChanges();

    expect(de.nativeElement.children.length).toBeGreaterThan(0);

  }));*/

  /*it('third test', fakeAsync(() => {
    console.log(navService.navState);
    navService.navState = NavState.Disabled;
    console.log(navService.navState);

    //expect(de.nativeElement.children.length).toBe(0);
    /!*fixture.whenStable().then(() => {
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        console.log(de.nativeElement.children.length);
        expect(de.nativeElement.children.length).toBe(0);
      });
    });*!/

    console.log(de.nativeElement);
    //fixture.detectChanges();
    tick();                  // wait for async getQuote
    fixture.detectChanges(); // update view with quote
    //tick();
    //tick();
    //tick();
    //fixture.detectChanges();
    console.log(de.nativeElement);
    expect(de.nativeElement.children.length).toBe(0);
  }));*/


});
