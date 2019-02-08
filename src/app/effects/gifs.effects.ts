import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs'
import { GifService } from '../services/gif.service';
import { ActionTypes, RecievedGifs, ErrorGifs, AddKeywords } from '../actions/gifs.actions';
import { State } from '../reducers';
import { Store } from '@ngrx/store';


@Injectable()
export class GifsEffects {

  @Effect()
  fetchInitGifs$: Observable<any> = this.actions$.pipe(
    ofType(ActionTypes.FetchInitGifs),
    mergeMap(() => this.gifService.getGifs('stop motion').pipe(
      map(gifs => 
        new RecievedGifs(gifs)
      ),
      catchError(err => 
        of(new ErrorGifs(err))
      )
    ))
  )

  @Effect()
  fetchGifsByKeyword$: Observable<any> = this.actions$.pipe(
    ofType(ActionTypes.FetchGifsByKeyword),
    mergeMap(({ payload: keywords }) => this.gifService.getGifs(keywords).pipe(
      map(gifs => {
        this.store.dispatch(new AddKeywords(String(keywords).split(', ')))
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
    private gifService: GifService,
    private store: Store<State>
  ) {}

}
