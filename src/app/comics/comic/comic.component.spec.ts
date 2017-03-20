/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ComicComponent } from './comic.component';
import {ComicImageComponent} from "../comic-image/comic-image.component";

describe('ComicComponent', () => {
  let component: ComicComponent;
  let fixture: ComponentFixture<ComicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicComponent, ComicImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display description', () => {

  });
});
