import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import {fetchSearchRequest, getSearchSuccess, getSearchFailure} from '../actions';

const isFetching = handleActions({
    [fetchSearchRequest]: () => true,
    [getSearchSuccess]: () => false,
    [getSearchFailure]: () => false
}, false);

const result = handleActions({
    [fetchSearchRequest]: () => [],
    [getSearchSuccess]: (state, action) => action.payload
}, []);

const error = handleActions({
    [fetchSearchRequest]: () => null,
    [getSearchSuccess]: () => null,
    [getSearchFailure]: (state, action) => action.payload
}, null)

export default combineReducers({
    isFetching,
    result,
    error
})
