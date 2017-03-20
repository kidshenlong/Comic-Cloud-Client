import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';


import { ComicImageComponent } from './comic-image.component';
import {DebugElement} from "@angular/core";

describe('ComicImageComponent', () => {
  let component: ComicImageComponent;
  let fixture: ComponentFixture<ComicImageComponent>;
  let de:      DebugElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change isImageLoaded to true when load event is called', () => {

    expect(component.isImageLoaded).toBeFalsy();

    fixture.debugElement.query(By.css('.comic-image')).triggerEventHandler('load', null);

    expect(component.isImageLoaded).toBeTruthy();

  })
});
