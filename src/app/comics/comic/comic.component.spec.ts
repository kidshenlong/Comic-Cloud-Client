/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";
import {ComicComponent} from "./comic.component";
import {ComicImageComponent} from "../comic-image/comic-image.component";
import {RouterLinkStubDirective} from "../../testing/router-stubs";

describe('ComicComponent', () => {
  let component: ComicComponent;
  let fixture: ComponentFixture<ComicComponent>;
  let el:      HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicComponent, ComicImageComponent, RouterLinkStubDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly display description', () => {

    component.description = "Test Value";

    fixture.detectChanges();

    el = fixture.debugElement.query(By.css('.comic-description')).nativeElement;

    expect(el.textContent).toContain('Test Value');

  });
});
