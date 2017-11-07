import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comic-image',
  templateUrl: './comic-image.component.html',
  styleUrls: ['./comic-image.component.scss']
})
export class ComicImageComponent implements OnInit {


  @Input() image: string;

  hidden = true;
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
