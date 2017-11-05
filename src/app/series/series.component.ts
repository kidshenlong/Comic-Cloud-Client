import { Component, OnInit } from '@angular/core';
import { NavState } from '../core/nav/shared/nav-state.enum';
import { Title } from '@angular/platform-browser';
import { NavService } from '../core/nav/shared/nav.service';
import { Comic } from '../shared/comics/comic.model';
import { Series } from '../shared/series/series.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  series: Series;
  comicsOfASeries: Comic[];
  seriesTitle: string;

  constructor(private navService: NavService, private titleService: Title, private route: ActivatedRoute) { }

  ngOnInit() {
    this.navService.navState = NavState.Authorised;
    this.route.paramMap.subscribe( (params: ParamMap) => {
      const seriesId = params.get('id');
      this.series = this.getSeries(seriesId);
      this.titleService.setTitle( 'Comic Cloud - ' + this.series.title );
      this.seriesTitle = this.series.title;

      this.comicsOfASeries = this.getComicsOfASeries(seriesId);
    });
  }

  private getComicsOfASeries(id: string): Comic[] {
    const testComic = new Comic();
    const testComic2 = new Comic();
    const testComic3 = new Comic();

    testComic.id = '1';
    testComic.image = 'http://cdn2-www.superherohype.com/assets/uploads/gallery/' +
      'the-15-best-superhero-comic-book-covers/x-men_vol_1_141.jpg';

    testComic2.id = '2';
    testComic2.image = 'http://static1.gamespot.com/uploads/original/1562/15626911/2991050-4996630-04-variant.jpg';

    testComic3.id = '3';
    testComic3.image = 'https://imgix.ranker.com/user_node_img/50028/1000557804/original/' +
      'superman-75-comic-book-series-photo-u1?w=650&q=50&fm=jpg&fit=crop&crop=faces';

    return [
      testComic,
      testComic2,
      testComic3,
      testComic,
      testComic2,
      testComic3,
      testComic,
      testComic2,
      testComic3,
      testComic,
      testComic2,
      testComic3,
    ];

  }

  private getSeries(id: string): Series {
    const testSeries = new Series();
    testSeries.title = 'X-Men';
    testSeries.id = id;
    testSeries.image = 'http://cdn2-www.superherohype.com/assets/uploads/gallery/' +
      'the-15-best-superhero-comic-book-covers/x-men_vol_1_141.jpg';
    return testSeries;

  }

}
