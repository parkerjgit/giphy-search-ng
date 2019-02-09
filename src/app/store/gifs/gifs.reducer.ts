import { Gif } from './gif';
import * as Gifs from './gifs.actions'

export enum SORT_BY {
  RATING = 'rating',
  TITLE = 'title',
  SCORE = 'score',
  DATE_IMPORTED = 'date imported',
}

export interface State {
  gifs: Array<Gif>,
  ratings: {
    'g': boolean,
    'pg': boolean,
    'pg-13': boolean,
    'y': boolean,
  },
  keywords: Array<string>,
  sortCriterion: string,
  isLoading: boolean,
  isError: boolean,
}

const initialState: State = {
  gifs: [],
  ratings: {
    'g': true,
    'pg': true,
    'pg-13': true,
    'y': true,
  },
  keywords: ['stop motion'],
  sortCriterion: SORT_BY.SCORE,
  isLoading: false,
  isError: false,
};

export function reducer(state = initialState, action: Gifs.Action): State {
  switch (action.type) {
    case Gifs.ActionTypes.FetchingGifs:
      return {
        ...state,
        isLoading: true,
      }
    case Gifs.ActionTypes.RecievedGifs:
      return {
        ...state,
        isLoading: false,
        gifs: [
          ...state.gifs,
          ...action.payload,
        ]
      }
    case Gifs.ActionTypes.ErrorGifs:
      return {
        ...state,
        isError: true,
      }
    case Gifs.ActionTypes.SetRating:
      return {
        ...state,
        ratings: {
          ...state.ratings,
          ...action.payload,
        }
      }
    case Gifs.ActionTypes.AddKeywords:
      return {
        ...state,
        keywords: [
          ...state.keywords,
          ...action.payload
        ]
      }
    case Gifs.ActionTypes.RemoveKeyword:
      return {
        ...state,
        gifs: state.gifs.filter(gif => !gif.keywords.includes(action.payload)), // Filters OUT!
        keywords: state.keywords.filter(k => k !== action.payload),
      }
    case Gifs.ActionTypes.SetSort:
      return {
        ...state,
        sortCriterion: action.payload
      }
    default:
      return state;
  }
}
