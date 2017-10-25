import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {RouterLinkStubDirective, RouterOutletStubComponent} from './testing/router-stubs';
import { NavComponent } from './core/nav/nav.component';
import { NavService } from './core/nav/shared/nav.service';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RouterOutletStubComponent,
        RouterLinkStubDirective,
        NavComponent
      ],
      providers: [
        { provide: NavService}
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
