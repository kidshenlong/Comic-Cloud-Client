/**
 * Created by Michael on 31/08/2016.
 */
import { Injectable } from '@angular/core';
import { FileUploader } from "ng2-file-upload/ng2-file-upload";

@Injectable()
export class UploadService {

    public uploader:FileUploader = new FileUploader(
        {url: 'https://evening-anchorage-3159.herokuapp.com/api/', autoUpload: true}
    );

    constructor() {
        console.log("upload service initialised")
    }

}