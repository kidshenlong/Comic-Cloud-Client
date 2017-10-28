import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Comic } from './comic.model';

@Injectable()
export class ComicsService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private comicsUrl = 'comics'; // todo raise to configuration

  constructor(private http: Http) { }

  getSingleSeries(id: string): Promise<Comic> {

    const url = `${this.comicsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Comic)
      .catch(this.handleError);

  }

  getAllSeries(): Promise<Comic[]>  {

    return this.http.get(this.comicsUrl)
      .toPromise()
      .then(response => response.json().data as Comic[])
      .catch(this.handleError);

  }

  delete(id: number): Promise<void> {
    const url = `${this.comicsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Comic> {
    return this.http
      .post(this.comicsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Comic)
      .catch(this.handleError);
  }

  update(hero: Comic): Promise<Comic> {
    const url = `${this.comicsUrl}/${hero.id}`;
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
