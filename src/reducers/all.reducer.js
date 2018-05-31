import {combineReducers} from "redux";
import {routerReducer} from 'react-router-redux';
import styleReducer from "./style.reducer";

const AllReducers = combineReducers({
    router: routerReducer,
    style: styleReducer
});

export default AllReducers