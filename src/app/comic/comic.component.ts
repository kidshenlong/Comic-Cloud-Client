import { Component, HostListener, OnInit } from '@angular/core';
import { NavService } from '../core/nav/shared/nav.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NavState } from '../core/nav/shared/nav-state.enum';
import { Comic } from '../shared/comics/comic.model';
import { Series } from '../shared/series/series.model';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss']
})
export class ComicComponent implements OnInit {

  comic: Comic;
  series: Series;

  constructor(private navService: NavService, private titleService: Title, private route: ActivatedRoute) { }

  ngOnInit() {
    this.navService.navState = NavState.Disabled;
    this.route.paramMap.subscribe( (params: ParamMap) => {
      const comicId = params.get('id');
      this.comic = this.getComic(comicId);
      this.series = this.getSeries(this.comic.series_id);
      this.titleService.setTitle( 'Comic Cloud - ' + this.series.title );
    });
  }

  getComic(id: string): Comic {

    const testComic = new Comic();

    testComic.id = id;
    testComic.issue = 1;
    testComic.images = [
      'http://static1.gamespot.com/uploads/original/1562/15626911/2991050-4996630-04-variant.jpg',
      'http://cdn2-www.superherohype.com/assets/uploads/gallery/the-15-best-superhero-comic-book-covers/x-men_vol_1_141.jpg',
      'https://imgix.ranker.com/user_node_img/50028/1000557804/original/' +
        'superman-75-comic-book-series-photo-u1?w=650&q=50&fm=jpg&fit=crop&crop=faces'
    ];

    return testComic;

  }

  private getSeries(id: string): Series {
    const testSeries = new Series();
    testSeries.title = 'X-Men';
    testSeries.id = id;
    testSeries.image = 'http://cdn2-www.superherohype.com/assets/uploads/gallery/' +
      'the-15-best-superhero-comic-book-covers/x-men_vol_1_141.jpg';
    return testSeries;

  }

  @HostListener('document:keydown', ['$event']) onKey(event: KeyboardEvent) {
    console.log('trigger');
    console.log(event);
  }

}
