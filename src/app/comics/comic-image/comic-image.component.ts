import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-comic-image',
  templateUrl: 'comic-image.component.html',
  styleUrls: ['comic-image.component.scss']
})
export class ComicImageComponent implements OnInit {

  @Input() private image: string;

  isImageLoaded: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  imageLoaded(event){
    this.isImageLoaded = true;
  }

}
