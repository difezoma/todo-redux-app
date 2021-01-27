import { Action, createReducer, on } from '@ngrx/store';
import { setFilter, validFilters } from './filter.actions';
 
export const initialState: validFilters = 'all';
 
const _filterReducer = createReducer(
  initialState,
  on(setFilter, (state: validFilters, { filter } ) => filter)
);
 
export function filterReducer(state: validFilters | undefined, action: Action) {
  return _filterReducer(state, action);
}