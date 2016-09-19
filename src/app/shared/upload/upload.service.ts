/**
 * Created by Michael on 31/08/2016.
 */
import { Injectable } from '@angular/core';

import { FileUploader } from "ng2-file-upload/ng2-file-upload";
import { Logger } from "angular2-logger/core";

@Injectable()
export class UploadService {

    public uploader:FileUploader = new FileUploader(
        {url: 'https://evening-anchorage-3159.herokuapp.com/api/', autoUpload: true}
    );

    constructor(private _logger: Logger) {
        //console.log("upload service initialised");
        //this._logger.debug('upload service initialised');

    }

}