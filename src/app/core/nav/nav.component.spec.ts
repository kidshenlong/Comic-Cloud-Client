import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';


import { NavComponent } from './nav.component';
import { NavState } from './shared/nav-state.enum';
import { NavService } from './shared/nav.service';
import { DebugElement } from '@angular/core';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let debugElement: DebugElement;
  let navService: NavService;

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

    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;

    navService = TestBed.get(NavService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be visible if the navState is Unauthorised', async(() => {
    debugElement = fixture.debugElement.query(By.css('.ribbon'));
    expect(debugElement.nativeElement.children.length).toBeGreaterThan(0);
  }));

  it('should not be visible if the navState is Disabled', () => {

    navService.navState = NavState.Disabled;

    fixture.detectChanges();

    debugElement = fixture.debugElement.query(By.css('.ribbon'));

    expect(debugElement).toBeNull();

  });

  it('should be visible if the navState is Authorised', () => {

    navService.navState = NavState.Authorised;

    debugElement = fixture.debugElement.query(By.css('.ribbon'));

    expect(debugElement.nativeElement.children.length).toBeGreaterThan(0);
  });
});
