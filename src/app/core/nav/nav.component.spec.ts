import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import { NavState } from './shared/nav-state.enum';
import { NavService } from './shared/nav.service';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {

    const navServiceStub = {
      navState: NavState.Unauthorised
    };
    TestBed.configureTestingModule({
      declarations: [ NavComponent ],
      providers: [
        { provide: NavService, useValue: navServiceStub },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
