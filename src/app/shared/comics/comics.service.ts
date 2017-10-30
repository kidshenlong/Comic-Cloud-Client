import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Comic } from './comic.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ComicsService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private comicsUrl = 'comics'; // todo raise to configuration

  constructor(private http: HttpClient) { }

  getComic(id: string): Promise<Comic> {

    const url = `${this.comicsUrl}/${id}`;

    return this.http.get<Comic>(url)
      .toPromise()
      .catch(this.handleError);

  }

  getComics(): Promise<Comic[]>  {

    return this.http.get<Comic[]>(this.comicsUrl)
      .toPromise()
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
      .post<Comic>(this.comicsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
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
