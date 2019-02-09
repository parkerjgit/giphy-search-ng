import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { SELECTORS, ACTIONS, Gifs } from './gifs'

interface State {
  gifs: Gifs.State
}

const reducers: ActionReducerMap<State> = {
  gifs: Gifs.reducer
};

const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

// Pass Thru
export * from './gifs/gifs.selectors'
export * from './gifs/gifs.actions'



export { SELECTORS, ACTIONS, State, reducers, metaReducers }