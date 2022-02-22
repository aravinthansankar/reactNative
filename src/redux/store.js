import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import feedReducer from './reducers/feedReducer';

const rootReducer = combineReducers({ feedReducer });

export const Store = createStore(rootReducer, applyMiddleware(thunk));