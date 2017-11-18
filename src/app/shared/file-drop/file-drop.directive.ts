import { Directive, HostListener } from '@angular/core';
import { UploadService } from '../../core/upload/upload.service';

@Directive({
  selector: '[appFileDrop]'
})
export class FileDropDirective {

  constructor(private uploadService: UploadService) {}

  @HostListener('dragover', [ '$event' ]) onDragOver(event: any): void {

    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('drop', [ '$event' ]) onDrop(event: any): void {

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
