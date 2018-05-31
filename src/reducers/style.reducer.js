import {CHANGE_THEME} from "../constants/style.constant";
import {handleActions} from "redux-actions";

const initialState = {
    theme: "Dark"
};

const styleReducer = handleActions({
    [CHANGE_THEME]: (state, action) => {
        if (action.payload === "Dark") {
            document.body.style.setProperty('--background-color', '#E3E3E3');
            document.body.style.setProperty('color', 'black');
            document.body.style.setProperty('--design-icon-background', 'rgba(0, 0, 0, 0.4)');
            return {
                ...state,
                theme: "Light"
            }
        } else if (action.payload === "Light") {
            document.body.style.setProperty('--background-color', '#1D1D1D');
            document.body.style.setProperty('color', 'white');
            document.body.style.setProperty('--design-icon-background', 'rgba(255, 255, 255, 0.1)');
            return {
                ...state,
                theme: "Dark"
            }
        }
    }
}, initialState);

export default styleReducer