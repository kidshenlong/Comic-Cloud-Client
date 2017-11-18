import { Component, HostListener, OnInit } from '@angular/core';
import { UploadService } from '../../core/upload/upload.service';

@Component({
  selector: 'app-file-drop',
  templateUrl: './file-drop.component.html',
  styleUrls: ['./file-drop.component.scss']
})
export class FileDropComponent implements OnInit {

  constructor(private uploadService: UploadService) {

  }
  ngOnInit() {
  }

  @HostListener('window:dragover', [ '$event' ]) onDragOver(event: any): void {

    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('window:drop', [ '$event' ]) onDrop(event: any): void {

    event.preventDefault();
    event.stopPropagation();

    console.log(event);
    const fileList: FileList = event.dataTransfer.files;

    // https://stackoverflow.com/questions/40902437/cant-use-foreach-with-filelist
    Array.prototype.forEach.call(fileList, (file: File)  => {
      console.log(file);
      this.uploadService.uploadList.push(file.name);
    });

  }


}
