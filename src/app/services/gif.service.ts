import { Injectable } from '@angular/core';
import { Observable, of, from, ObservableInput} from 'rxjs';
import { map, switchMap, pluck, toArray } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { Gif } from '../store/gifs/gif';

const API = '//api.giphy.com/v1/gifs/'
const API_KEY = 'WMroid9D8JOFUH8abXr3x6xs3zFKOC7q';
const LIMIT = 5;
const query = (keywords) =>
  'search?q=' + keywords + '&api_key=' + API_KEY + '&limit=' + LIMIT
const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

@Injectable({
  providedIn: 'root'
})
export class GifService {

  constructor(private http: HttpClient) { }

  getGifs(keywords: string): Observable<any> {
    // return of(GIFS);
    // const keywords = 'stop motion'
    return this.http
      .get(API + query(keywords))
      .pipe(
        switchMap(({data}: any) : Observable<object> => from(data)),
        map((data: Observable<object>) : Gif => new Gif(
          data["id"],
          data["title"],
          data["images"],
          keywords.split(', '),
          data["rating"]
        )),
        toArray(),
      );
  }
}
