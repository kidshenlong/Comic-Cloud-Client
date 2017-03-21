import {Component, OnInit, Input} from '@angular/core';
import {Comic} from "../shared/comic";

@Component({
  selector: 'app-comic',
  templateUrl: 'comic.component.html',
  styleUrls: ['comic.component.scss']
})
export class ComicComponent implements OnInit {

  //@Input() private thisComic: Comic;
  @Input() description: string;
  @Input() image: string;

  constructor() { }

  ngOnInit() {
  }

}
