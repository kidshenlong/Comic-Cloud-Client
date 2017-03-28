/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {LibraryComponent} from "./library.component";
import {NavService} from "../core/nav/shared/nav.service";
import {NavState} from "../core/nav/shared/nav-state.enum";
import {LibraryFeaturedComponent} from "./library-featured/library-featured.component";
import {ComicComponent} from "../comics/comic/comic.component";
import {ComicImageComponent} from "../comics/comic-image/comic-image.component";
import {SeriesListComponent} from "../series/series-list/series-list.component";
import {RouterLinkStubDirective} from "../testing/router-stubs";
import {RouterTestingModule} from "@angular/router/testing";

describe('LibraryComponent', () => {
  let component: LibraryComponent;
  let fixture: ComponentFixture<LibraryComponent>;

  beforeEach(async(() => {
    let navServiceStub = {
      navState: NavState.Authorised
    };

    TestBed.configureTestingModule({
      imports:[
        //http://stackoverflow.com/questions/39577920/angular-2-unit-testing-components-with-routerlink/39579009#39579009
        //http://stackoverflow.com/questions/40125159/angular2-testing-no-provider-for-locationstrategy
        //RouterTestingModule.withRoutes([])
        RouterTestingModule
      ],
      declarations: [ LibraryComponent, LibraryFeaturedComponent, ComicComponent, ComicImageComponent, SeriesListComponent, RouterLinkStubDirective ],
      providers: [
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
