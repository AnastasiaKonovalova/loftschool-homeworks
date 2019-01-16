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