import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryComponent } from './library.component';
import { NavState } from '../core/nav/shared/nav-state.enum';
import { NavService } from '../core/nav/shared/nav.service';
import { LibraryFeaturedComponent } from './library-featured/library-featured.component';

describe('LibraryComponent', () => {
  let component: LibraryComponent;
  let fixture: ComponentFixture<LibraryComponent>;

  beforeEach(async(() => {
    const navServiceStub = {
      navState: NavState.Authorised
    };
    TestBed.configureTestingModule({
      declarations: [ LibraryComponent, LibraryFeaturedComponent ],
      providers : [
        { provide: NavService, useValue: navServiceStub }
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
