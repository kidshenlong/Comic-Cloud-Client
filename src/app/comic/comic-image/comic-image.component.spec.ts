import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicImageComponent } from './comic-image.component';

describe('ComicImageComponent', () => {
  let component: ComicImageComponent;
  let fixture: ComponentFixture<ComicImageComponent>;

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
});
