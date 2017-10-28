import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent implements OnInit {

  @Input() description: string;
  @Input() subDescription: string;
  @Input() navigateTo: string;
  @Input() image: string;

  isImageLoaded = false;

  constructor() { }

  ngOnInit() {
  }

  imageLoaded(event) {
    this.isImageLoaded = true;
  }

}
