import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {fetchRequest, fetchSuccess, fetchFailure} from './actions';

const isLoading = handleActions({
    [fetchRequest]: (state, action) => true,
    [fetchSuccess]: (state, action) => false,
    [fetchFailure]: (state, action) => false,
}, false);

const data = handleActions({
    [fetchSuccess]: (state, action) => action.payload
}, null);

const error = handleActions({
    [fetchRequest]: (state, action) => null,
    [fetchSuccess]: (state, action) => null,
    [fetchFailure]: (state, action) => action.payload
}, null);


export default combineReducers({
    isLoading,
    data,
    error
})