import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GIFS } from './fake_gifs';
import { Gif } from './gif';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  constructor() { }

  getGifs(): Observable<Gif[]> {
    return of(GIFS);
  }
}
