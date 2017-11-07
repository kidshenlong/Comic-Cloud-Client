import { AfterViewInit, Component, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NavService } from '../core/nav/shared/nav.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NavState } from '../core/nav/shared/nav-state.enum';
import { Comic } from '../shared/comics/comic.model';
import { Series } from '../shared/series/series.model';
import { ComicImageState } from './comic-image-state';
import { ComicImageComponent } from './comic-image/comic-image.component';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss']
})
export class ComicComponent implements OnInit, AfterViewInit {


  comic: Comic;
  series: Series;
  private _currentPage = 1;

  private _currentPageSource = new Subject<Number>();

  comicLength = 1;
  comicImageStates: ComicImageState[] = [];
  @ViewChildren(ComicImageComponent) private comicImageComponents: QueryList<ComicImageComponent>;

  constructor(private navService: NavService, private titleService: Title, private route: ActivatedRoute) { }

  ngOnInit() {
    this.navService.navState = NavState.Disabled;
    this.route.paramMap.subscribe( (params: ParamMap) => {
      const comicId = params.get('id');
      this.comic = this.getComic(comicId);
      this.series = this.getSeries(this.comic.series_id);
      this.titleService.setTitle( 'Comic Cloud - ' + this.series.title );
      this.comicLength = this.comic.images.length;
    });
  }

  ngAfterViewInit() {
    // Wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    const comicImageComponets = this.comicImageComponents.toArray();
    comicImageComponets.forEach((comicImageComponent, index) => {
      //comicImageComponent.enabled = true;
      //comicImageComponent.hidden = false;
    });
  }

  private initComic(images: ComicImageComponent[]) {
    // create comicState
    // this.comicImageStates = new ComicImageState()[];
    images.forEach( imageUrl => {

      /*const comicImageState = new ComicImageState();
      comicImageState.url = imageUrl;
      comicImageState.state = 'not-loaded';
      this.comicImageStates.push(comicImageState);*/
    });

  }

  get currentPage(): number {
    return this._currentPage;
  }

  set currentPage(value: number) {
    if (value > 0 && value <= this.comicLength) {
      this._currentPage = value;
    } else {
      console.log('out of bounds');
    }
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
    this._keyup(event);
  }

  private _keyup(event: KeyboardEvent) {
    if (event.keyCode === 37) {
      this.currentPage--;
    } else if (event.keyCode === 39) {
      this.currentPage++;
    }
  }

  private viewPage(page: number){

  }

}
