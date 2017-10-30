import { Injectable } from '@angular/core';
import { Series } from './series.model';

import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SeriesService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private seriesUrl = 'series'; // todo raise to configuration

  constructor(private http: HttpClient) { }

  getSingleSeries(id: string): Promise<Series> {

    const url = `${this.seriesUrl}/${id}`;
    return this.http.get<Series>(url)
      .toPromise()
      .catch(this.handleError);

  }

  getAllSeries(): Promise<Series[]>  {

    return this.http.get<Series[]>(this.seriesUrl)
      .toPromise()
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
      .post<Series>(this.seriesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
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
