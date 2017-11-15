import { Component, OnInit } from '@angular/core';
import { NavService } from './shared/nav.service';
import { NavState } from './shared/nav-state.enum';
import { Router } from '@angular/router';
import { UploadService } from '../upload/upload.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  navStateType = NavState;

  constructor(public navService: NavService, private router: Router, private uploadService: UploadService) { }

  fileChange(event) {
    console.log(event);
    let fileList: FileList = event.target.files;

    // https://stackoverflow.com/questions/40902437/cant-use-foreach-with-filelist
    Array.prototype.forEach.call(fileList, (file: File)  => {
      console.log(file);
      this.uploadService.uploadList.push(file.name);
    });

    //fileList.item()
    /*let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      let file: File = fileList[0];
      let formData:FormData = new FormData();
      formData.append('uploadFile', file, file.name);
      let headers = new Headers();
      //No need to include Content-Type in Angular 4
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      let options = new RequestOptions({ headers: headers });
      this.http.post(`${this.apiEndPoint}`, formData, options)
        .map(res => res.json())
        .catch(error => Observable.throw(error))
        .subscribe(
          data => console.log('success'),
          error => console.log(error)
        )
    }*/
  }
}
