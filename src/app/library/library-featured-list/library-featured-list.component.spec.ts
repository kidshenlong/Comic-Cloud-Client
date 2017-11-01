import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryFeaturedListComponent } from './library-featured-list.component';
import { StackComponent } from '../../shared/stack/stack.component';
import { LibraryModule } from '../library.module';
import { PageNotFoundComponent } from '../../not-found.component';
import { APP_BASE_HREF } from '@angular/common';

describe('LibraryFeaturedListComponent', () => {
  let component: LibraryFeaturedListComponent;
  let fixture: ComponentFixture<LibraryFeaturedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotFoundComponent ],
      imports: [ LibraryModule ],
      providers : [
        { provide: APP_BASE_HREF, useValue : '/' }
      ]
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
