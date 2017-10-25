import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryFeaturedComponent } from './library-featured.component';

describe('LibraryFeaturedComponent', () => {
  let component: LibraryFeaturedComponent;
  let fixture: ComponentFixture<LibraryFeaturedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryFeaturedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
