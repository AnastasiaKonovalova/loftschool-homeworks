import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import {fetchShowsRequest, getShowsSuccess, getShowsFailure} from '../actions';

const isFetching = handleActions({
    [fetchShowsRequest]: () => true,
    [getShowsSuccess]: () => false,
    [getShowsFailure]: () => false
}, false);

const showData = handleActions({
    [fetchShowsRequest]: () => [],
    [getShowsSuccess]: (state, action) => action.payload
}, []);

const error = handleActions({
    [fetchShowsRequest]: () => null,
    [getShowsSuccess]: () => null,
    [getShowsFailure]: (state, action) => action.payload
}, null)

export default combineReducers({
    isFetching,
    showData,
    error
})

