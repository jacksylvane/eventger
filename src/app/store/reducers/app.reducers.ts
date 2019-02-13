import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { eventReducers } from './event.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  events: eventReducers,
  router: routerReducer
};
