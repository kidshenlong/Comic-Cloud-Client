import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesComponent } from './series.component';
import { NavState } from '../core/nav/shared/nav-state.enum';
import { NavService } from '../core/nav/shared/nav.service';

describe('SeriesComponent', () => {
  let component: SeriesComponent;
  let fixture: ComponentFixture<SeriesComponent>;

  beforeEach(async(() => {
    const navServiceStub = {
      navState: NavState.Authorised
    };
    TestBed.configureTestingModule({
      declarations: [ SeriesComponent ],
      providers : [
        { provide: NavService, useValue: navServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
