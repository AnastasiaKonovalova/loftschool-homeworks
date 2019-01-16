// Реализуйте searchMiddleware
// Обратите внимание на файл `searchMiddleware.test.js`

// Вам необходимо обработать searchRequest
// После получения данных с сервера - диспачте searchSuccess
// В случае ошибки searchFailure

// На забудьте вызвать метод next.


import {search} from '../api';
import { fetchSearchRequest, getSearchSuccess, getSearchFailure } from '../actions';

export const searchMiddleware = store => next => action => {
    if(action.type === fetchSearchRequest.toString()){
        search(action.payload)
            .then(result => {
                store.dispatch(getSearchSuccess(result))
            })
            .catch(error => {
                store.dispatch(getSearchFailure(error))
            })
    }
    return next(action)
}

