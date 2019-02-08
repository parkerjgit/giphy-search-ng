import { Action } from '@ngrx/store';
import { Gif } from '../gif';

export enum ActionTypes {
  FetchInitGifs = '[Gifs] Fetch Init Gifs',   // effect
  FetchGifsByKeyword = '[Gifs] Fetch Gifs By Keyword', // effect
  FetchingGifs = '[Gifs] Fetching Gifs',
  RecievedGifs = '[Gifs] Received Gifs',
  ErrorGifs = '[Gifs] Error Gifs',
  SetRating = '[Gifs] Set Rating',
  AddKeywords = '[Gifs] Add Keywords',
  RemoveKeyword = '[Gifs] Remove Keywords',
  SetSort = '[Gifs] Set Sort',
}

export class FetchGifsByKeyword implements Action {
  readonly type = ActionTypes.FetchGifsByKeyword;
  constructor(public payload: string) {}
}
export class FetchingGifs implements Action {
  readonly type = ActionTypes.FetchingGifs;
}
export class RecievedGifs implements Action {
  readonly type = ActionTypes.RecievedGifs;
  constructor(public payload: Array<Gif>) {}
}
export class ErrorGifs implements Action {
  readonly type = ActionTypes.ErrorGifs;
  constructor(public error: any) {}
}
export class SetRating implements Action {
  readonly type = ActionTypes.SetRating;
  constructor(public payload: object) {}
}
export class AddKeywords implements Action {
  readonly type = ActionTypes.AddKeywords;
  constructor(public payload: Array<string>) {}
}
export class RemoveKeyword implements Action {
  readonly type = ActionTypes.RemoveKeyword;
  constructor(public payload: string) {}
}
export class SetSort implements Action {
  readonly type = ActionTypes.SetSort;
  constructor(public payload: string) {}
}

export type Action = 
  FetchGifsByKeyword |
  FetchingGifs | 
  RecievedGifs |
  ErrorGifs |
  SetRating |
  AddKeywords |
  RemoveKeyword |
  SetSort;
