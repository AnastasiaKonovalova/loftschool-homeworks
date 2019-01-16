import {createAction} from 'redux-actions';

export const fetchShowsRequest = createAction('SHOWS_REQUEST');
export const getShowsSuccess = createAction('SHOWS_SUCCESS');
export const getShowsFailure = createAction('SHOWS_FAILURE');

export const fetchSearchRequest = createAction('SEARCH_REQUEST');
export const getSearchSuccess = createAction('SEARCH_SUCCESS');
export const getSearchFailure = createAction('SEARCH_FAILURE');