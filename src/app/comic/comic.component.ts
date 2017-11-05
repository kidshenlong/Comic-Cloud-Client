import { Component, OnInit } from '@angular/core';
import { NavService } from '../core/nav/shared/nav.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NavState } from '../core/nav/shared/nav-state.enum';
import { Comic } from '../shared/comics/comic.model';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss']
})
export class ComicComponent implements OnInit {

  comic: Comic[];

  constructor(private navService: NavService, private titleService: Title, private route: ActivatedRoute) { }

  ngOnInit() {
    this.navService.navState = NavState.Disabled;
    this.route.paramMap.subscribe( (params: ParamMap) => {
      const comicId = params.get('id');
      //this.comic = this.getSeries(seriesId);
      //this.titleService.setTitle( 'Comic Cloud - ' + this.series.title );
      //this.seriesTitle = this.series.title;

    });
  }

}
