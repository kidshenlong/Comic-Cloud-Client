import { Directive, HostListener } from '@angular/core';
import { UploadService } from '../../core/upload/upload.service';

@Directive({
  selector: '[appFileDrop]'
})
export class FileDropDirective {

  constructor(private uploadService: UploadService) {
    console.log('lolz');
  }

  @HostListener('drop', [ '$event' ])
  public onDrop(event: any): void {

    event.preventDefault();
    event.stopPropagation();

    console.log(event);
    let fileList: FileList = event.target.files;

    // https://stackoverflow.com/questions/40902437/cant-use-foreach-with-filelist
    Array.prototype.forEach.call(fileList, (file: File)  => {
      console.log(file);
      this.uploadService.uploadList.push(file.name);
    });

  }

  @HostListener('mouseenter') onMouseEnter() {
    console.log("enter");
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log("leave");
  }

  @HostListener('click') click() {
    console.log("click");
  }

}
