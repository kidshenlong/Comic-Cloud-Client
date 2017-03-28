import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {SeriesListComponent} from "./series-list.component";
import {ComicComponent} from "../../comics/comic/comic.component";
import {RouterLinkStubDirective} from "../../testing/router-stubs";
import {ComicImageComponent} from "../../comics/comic-image/comic-image.component";

describe('SeriesListComponent', () => {
  let component: SeriesListComponent;
  let fixture: ComponentFixture<SeriesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesListComponent, ComicComponent, RouterLinkStubDirective, ComicImageComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
