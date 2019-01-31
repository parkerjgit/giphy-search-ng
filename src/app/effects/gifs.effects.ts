import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs'
import { GifService } from '../gif.service';
import { ActionTypes, RecievedGifs, ErrorGifs } from '../actions/gifs.actions';

@Injectable()
export class GifsEffects {

  @Effect()
  fetchInitGifs$: Observable<any> = this.actions$.pipe(
    ofType(ActionTypes.FetchInitGifs),
    mergeMap(() => this.gifService.getGifs().pipe(
      map(gifs => {
        console.log(JSON.stringify(gifs))
        return new RecievedGifs(gifs)
        }
      ),
      catchError(err => 
        of(new ErrorGifs(err))
      )
    ))
  )

  constructor(
    private actions$: Actions,
    private gifService: GifService
  ) {}

}
