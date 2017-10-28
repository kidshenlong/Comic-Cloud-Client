import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent implements OnInit {

  @Input() description: string;
  @Input() navigateTo: string;
  @Input() image: string;

  private _imageLoaded = false;

  constructor() { }

  ngOnInit() {
  }

  get imageLoaded(): boolean {
    return this._imageLoaded;
  }

  set imageLoaded(value: boolean) {
    this._imageLoaded = value;
  }

}
