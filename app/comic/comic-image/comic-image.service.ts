import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import {IMAGES_URL} from "../../shared/data.service";

@Injectable()
export class ComicImageService {
    constructor(private http:Http) {

    }

    getComicImage(url: string): Observable<any> {
        //return this.http.get(IMAGES_URL + "/" + uuid)
        //var thing;
        /*return this.http.get("http://static5.comicvine.com/uploads/scale_small/" +
            "6/66303/2734164-legendluther01_cover.jpeg")
            .map(res => <Response> res.blob())
            .catch(this.handleError);*/
        /*return this.loadImage("http://static5.comicvine.com/uploads/scale_small/" +
            "6/66303/2734164-legendluther01_cover.jpeg");*/

        return this.loadImage(url);
    }


    loadImage(image) {
        return Observable
            .create(observer => {
                const img = new Image();
                img.src = image;
                img.onload = () => {
                    observer.next(img);
                    observer.complete();
                };
                img.onerror = err => {
                    observer.error(err);
                    observer.complete();
                };
            });
    }

    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}