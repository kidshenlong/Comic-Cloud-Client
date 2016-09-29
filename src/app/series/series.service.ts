import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";

import {Series} from "./series";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/toPromise";
//import {SERIES_URL} from "../shared/data.service";


@Injectable()
export class SeriesService {

    constructor (private http: Http) {}

    private _seriesUrl = "http://localhost:3000/series";//SERIES_URL;  // URL to web api

    getAllSeries(): Observable<Series[]> {

        let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization' : 'Bearer 1ec62627-e09c-4b94-85ce-1343a19bb74e'});
        let options = new RequestOptions({ headers: headers });


        return this.http
            .get(this._seriesUrl, options)
            .map((r:Response) => r.json().data as Series[])
            .catch(error => {
                // TODO: real error handling
                console.log(error);
                return Observable.of<Series[]>([]);
            });
    }

    getSeries(id: string): Observable<Series> {
        return this.http
            .get(this._seriesUrl + "/" + id)
            .map((r:Response) => r.json() as Series)
            .catch(error => {
                // TODO: real error handling
                console.log(error);
                return Observable.of<Series>();
            });
    }
}