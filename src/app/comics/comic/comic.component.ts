import {Component, OnInit, Input} from "@angular/core";

@Component({
  selector: 'app-comic',
  templateUrl: 'comic.component.html',
  styleUrls: ['comic.component.scss']
})
export class ComicComponent implements OnInit {

  @Input() description: string;
  @Input() subDescription: string;
  @Input() navigateTo: string;
  @Input() image: string;

  constructor() { }

  ngOnInit() {
  }

}
