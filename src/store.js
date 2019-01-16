import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import {searchMiddleware} from './middlewares/searchMiddleware';
import {showMiddleware} from './middlewares/showMiddleware';

const getStore = () => createStore(reducer, applyMiddleware(searchMiddleware, showMiddleware))
export default getStore

// const store = createStore(reducer, applyMiddleware(searchMiddleware, showMiddleware))

// export default () => store;