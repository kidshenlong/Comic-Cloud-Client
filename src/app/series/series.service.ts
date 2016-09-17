import {Injectable}     from '@angular/core';
import {Http, Response} from '@angular/http';
import {Series}           from './series.model';
import {Observable}     from 'rxjs/Observable';
//import {SERIES_URL} from "../shared/data.service";

@Injectable()
export class SeriesService {
    constructor (private http: Http) {}

    //private _seriesUrl = SERIES_URL;  // URL to web api

    /*getAllSeries(){
        return this.http.get(this._seriesUrl)
            .map(res => <Series[]> res.json().data)
            .do(data => console.log(data)) // eyeball results in the console
            .catch(this.handleError);

    }

    getSeries(id: string){
        return this.http.get(this._seriesUrl + "/" + id)
            .map(res => <Series> res.json())
            .do(data => console.log(data)) // eyeball results in the console
            .catch(this.handleError);

    }

    private handleError (error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }*/
}