import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackComponent } from './stack.component';
import { By } from '@angular/platform-browser';
import { RouterLinkStubDirective } from '../../testing/router-stubs';

describe('StackComponent', () => {
  let component: StackComponent;
  let fixture: ComponentFixture<StackComponent>;
  let el: HTMLElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackComponent, RouterLinkStubDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly display description', () => {

    component.description = 'Test Value';

    fixture.detectChanges();

    el = fixture.debugElement.query(By.css('.comic-description')).nativeElement;

    expect(el.textContent).toContain('Test Value');

  });

  it('should change imageLoaded to true when load event is called', () => {

    component.description = 'Test Value';

    expect(component.imageLoaded).toBeFalsy();

    fixture.debugElement.query(By.css('.comic-image')).triggerEventHandler('load', null);

    expect(component.imageLoaded).toBeTruthy();

  });
});
