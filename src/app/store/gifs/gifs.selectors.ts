import { createSelector } from '@ngrx/store';
import * as Gifs from './gifs.reducer'
import { Gif } from './gif';
import { State } from '../../store'

const getRatings = (state: State) => state.gifs.ratings;
const getKeywords = (state: State)  => state.gifs.keywords;
const getSort = (state: State) => state.gifs.sortCriterion;
const getGifs = (state: State) => state.gifs.gifs;

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

const gifsByRating = createSelector(
  [getRatings, getGifs],
  (ratings, gifs) =>
    gifs.filter(gif => ratings[gif.rating])
)

const gifsByKeyword = createSelector(
  [getKeywords, gifsByRating],
  (keywords, gifs) =>
    gifs.filter(gif => gif.keywords.some(k => keywords.includes(k)))
)

const sortedGifs = createSelector(
  [getSort, gifsByKeyword],
  (sort, gifs) =>
    [...gifs.sort(compare[sort])]
)

export {
  getRatings,
  getKeywords,
  getSort,
  getGifs,
  gifsByRating,
  gifsByKeyword,
  sortedGifs
}