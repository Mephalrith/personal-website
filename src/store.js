import allReducers from './reducers/all.reducer';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

const middleware = applyMiddleware(
    routerMiddleware(history),
    thunk,
);

const store = createStore(allReducers, middleware);

export default store;