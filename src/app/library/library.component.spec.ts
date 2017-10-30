import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryComponent } from './library.component';
import { NavState } from '../core/nav/shared/nav-state.enum';
import { NavService } from '../core/nav/shared/nav.service';
import { LibraryFeaturedListComponent } from './library-featured-list/library-featured-list.component';
import { LibraryListComponent } from './library-list/library-list.component';
import { LibraryModule } from './library.module';
import { PageNotFoundComponent } from '../not-found.component';
import { APP_BASE_HREF } from '@angular/common';

describe('LibraryComponent', () => {
  let component: LibraryComponent;
  let fixture: ComponentFixture<LibraryComponent>;

  beforeEach(async(() => {
    const navServiceStub = {
      navState: NavState.Authorised
    };
    TestBed.configureTestingModule({
      declarations: [ PageNotFoundComponent ],
      imports: [ LibraryModule ],
      providers : [
        { provide: NavService, useValue: navServiceStub },
        { provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
