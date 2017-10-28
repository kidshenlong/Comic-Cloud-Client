import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Series } from './series.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class SeriesService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private seriesUrl = 'series'; // todo raise to configuration

  constructor(private http: Http) { }

  getSingleSeries(id: string): Promise<Series> {

    const url = `${this.seriesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Series)
      .catch(this.handleError);

  }

  getAllSeries(): Promise<Series[]>  {

    return this.http.get(this.seriesUrl)
      .toPromise()
      .then(response => response.json().data as Series[])
      .catch(this.handleError);

  }

  delete(id: number): Promise<void> {
    const url = `${this.seriesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Series> {
    return this.http
      .post(this.seriesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Series)
      .catch(this.handleError);
  }

  update(hero: Series): Promise<Series> {
    const url = `${this.seriesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // todo this should be a log level based call
    return Promise.reject(error.message || error);
  }

}
