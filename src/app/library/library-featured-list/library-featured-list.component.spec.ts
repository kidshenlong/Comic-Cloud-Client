import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryFeaturedListComponent } from './library-featured-list.component';

describe('LibraryFeaturedListComponent', () => {
  let component: LibraryFeaturedListComponent;
  let fixture: ComponentFixture<LibraryFeaturedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryFeaturedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryFeaturedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
