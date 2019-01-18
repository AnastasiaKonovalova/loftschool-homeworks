import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';
import searchMiddleware from './middlewares/searchMiddleware';
import showMiddleware from './middlewares/showMiddleware';

const getStore = () => createStore(reducer, 
    compose(
        applyMiddleware(searchMiddleware),
        applyMiddleware(showMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ 
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : noop => noop
    )
)

export default getStore
