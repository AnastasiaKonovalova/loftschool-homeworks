import {fetchShowsRequest, getShowsSuccess, getShowsFailure} from '../actions';

const initialState = {
    isFetching: false,
    showData: [],
    error: null
}

export default (state = initialState, action) => {
    switch (action.type){
        case fetchShowsRequest.toString():
            return {
                ...state,
                isFetching: true,
                showData: []
            }

        case getShowsSuccess.toString():
            return {
                ...state,
                isFetching: false,
                showData: action.payload
            }

        case getShowsFailure.toString():
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        
        default:
            return state
    }
}
