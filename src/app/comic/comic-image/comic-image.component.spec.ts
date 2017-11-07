import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicImageComponent } from './comic-image.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ComicImageComponent', () => {
  let component: ComicImageComponent;
  let fixture: ComponentFixture<ComicImageComponent>;
  let debugElement: DebugElement;


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

  it('should not show an element if enabled is false', () => {
    debugElement = fixture.debugElement.query(By.css('.comic-image'));
    expect(debugElement).toBeNull();
  });

  it('should show an element if enabled is true', () => {
    component.enabled = true;
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('.comic-image'));
    expect(debugElement.nativeElement).toBeDefined();
  });

  it('should show an element if enabled is true', () => {
    component.enabled = true;
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('.comic-image'));
    expect(debugElement.nativeElement).toBeDefined();
  });
});
