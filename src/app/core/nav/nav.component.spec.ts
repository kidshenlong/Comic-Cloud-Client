/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
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

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('.ribbon'));

    //el = de.nativeElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('first test', () => {
    //    expect(heroEl.nativeElement.textContent).toContain(expectedPipedName);
    expect(de.nativeElement.children.length).toBeGreaterThan(0)

  });
  /*it('should display original title', () => {
    fixture.detectChanges();
    expect(fixture).toContain("");
  });*/

});
