import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as Gifs from '../reducers/gifs.reducer'
import { Gif } from '../gif';

export interface State {
  gifs: Gifs.State
}

export const reducers: ActionReducerMap<State> = {
  gifs: Gifs.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

// Selectors
export const getRatings = (state: State) => state.gifs.ratings;
export const getKeywords = (state: State)  => state.gifs.keywords;
export const getSort = (state: State) => state.gifs.sortCriterion;
export const getGifs = (state: State) => state.gifs.gifs;

const compareNum = (property: string) => (a: Gif, b: Gif) => {
  return a[property] - b[property];
}

const compareAlpha = (property: string) => (a: Gif, b: Gif) => {
  if (a[property] > b[property]) {
    return 1;
  }
  if (a[property] < b[property]) {
    return -1;
  }
  return 0;
}

const compare = {
  [Gifs.SORT_BY.RATING]: compareAlpha('rating'),
  [Gifs.SORT_BY.SCORE]: compareNum('_score'),
  [Gifs.SORT_BY.TITLE]: compareAlpha('title'),
  [Gifs.SORT_BY.DATE_IMPORTED]: compareAlpha('import_datetime'),
}

export const gifsByRating = createSelector(
  [getRatings, getGifs],
  (ratings, gifs) =>
    gifs.filter(gif => ratings[gif.rating])
)

export const gifsByKeyword = createSelector(
  [getKeywords, gifsByRating],
  (keywords, gifs) =>
    gifs.filter(gif => gif.keywords.some(k => keywords.includes(k)))
)

export const sortedGifs = createSelector(
  [getSort, gifsByKeyword],
  (sort, gifs) =>
    [...gifs.sort(compare[sort])]
)