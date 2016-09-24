import { Component } from '@angular/core';
import {UploadService} from "./shared/upload/upload.service";

@Component({
  selector: 'comic-cloud-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor( public uploadService: UploadService) { }
}
