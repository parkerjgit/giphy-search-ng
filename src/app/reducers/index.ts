import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as Gifs from '../reducers/gifs.reducer'

export interface State {
  gifs: Gifs.State
}

export const reducers: ActionReducerMap<State> = {
  gifs: Gifs.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
