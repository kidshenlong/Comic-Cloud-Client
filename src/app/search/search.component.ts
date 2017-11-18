import { Component, OnInit } from '@angular/core';
import { NavService } from '../core/nav/shared/nav.service';
import { Title } from '@angular/platform-browser';
import { UploadService } from '../core/upload/upload.service';
import { NavState } from '../core/nav/shared/nav-state.enum';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private navService: NavService, private titleService: Title, private uploadService: UploadService ) { }

  ngOnInit() {
    this.titleService.setTitle( 'Comic Cloud - Search' );
    this.navService.navState = NavState.Authorised;
  }

}
