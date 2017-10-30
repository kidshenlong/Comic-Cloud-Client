import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryListComponent } from './library-list.component';
import { StackComponent } from '../../shared/stack/stack.component';
import { RouterLinkStubDirective } from '../../testing/router-stubs';

describe('LibraryListComponent', () => {
  let component: LibraryListComponent;
  let fixture: ComponentFixture<LibraryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryListComponent, StackComponent, RouterLinkStubDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
