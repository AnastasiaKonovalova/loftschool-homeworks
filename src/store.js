import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import searchMiddleware from './middlewares/searchMiddleware';
import showMiddleware from './middlewares/showMiddleware';

const getStore = () => createStore(reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__(), 
    applyMiddleware(searchMiddleware, showMiddleware))
export default getStore
