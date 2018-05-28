import {combineReducers} from "redux";
import {routerReducer} from 'react-router-redux';

const AllReducers = combineReducers({
    router: routerReducer
});

export default AllReducers