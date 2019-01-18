import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import {fetchSearchRequest, getSearchSuccess, getSearchFailure} from '../actions';

const initialState = {
    isFetching: false,
    result: [],
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case fetchSearchRequest.toString():
            return {
                ...state,
                isFetching: true,
                result: []
            }

        case getSearchSuccess.toString():
            return {
                ...state,
                isFetching: false,
                result: action.payload
            }

        case getSearchFailure.toString():
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }

        default:
            return state;
    }
} 

// const isFetching = handleActions({
//     [fetchSearchRequest]: () => true,
//     [getSearchSuccess]: () => false,
//     [getSearchFailure]: () => false
// }, false);

// const result = handleActions({
//     [fetchSearchRequest]: () => [],
//     [getSearchSuccess]: (state, action) => action.payload
// }, []);

// const error = handleActions({
//     [fetchSearchRequest]: () => null,
//     [getSearchSuccess]: () => null,
//     [getSearchFailure]: (state, action) => action.payload
// }, null)

// export default combineReducers({
//     isFetching,
//     result,
//     error
// })
