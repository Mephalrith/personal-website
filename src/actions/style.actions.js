import {CHANGE_THEME} from "../constants/style.constant";

export const changeTheme = (theme) => {
    return {
        type: CHANGE_THEME,
        payload: theme
    }
};