import { Component, OnInit } from '@angular/core';
import { NavService } from '../core/nav/shared/nav.service';
import { NavState } from '../core/nav/shared/nav-state.enum';
import { Title } from '@angular/platform-browser';
import { Series } from '../shared/series/series.model';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  library: Series[];

  constructor(private navService: NavService, private titleService: Title ) { }

  ngOnInit() {
    this.titleService.setTitle( 'Comic Cloud - Library' );
    this.navService.navState = NavState.Authorised;
    this.library = this.getSeries();
  }

  private getSeries(): Series[] {
    const testSeries = new Series();
    const testSeries2 = new Series();
    testSeries.id = '1';
    testSeries.image = 'http://cdn2-www.superherohype.com/assets/uploads/gallery/' +
      'the-15-best-superhero-comic-book-covers/x-men_vol_1_141.jpg';

    testSeries2.id = '2';
    testSeries2.image = 'http://static1.gamespot.com/uploads/original/1562/15626911/2991050-4996630-04-variant.jpg';

    return [
      testSeries,
      testSeries2,
      testSeries,
      testSeries2,
      testSeries,
      testSeries2,
      testSeries,
      testSeries2,
    ];

  }

}
