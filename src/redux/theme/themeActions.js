import { ADD_THEME } from "./themeTypes"

export const addTheme = (theme) => {
    return{
        type: ADD_THEME,
        payload: theme,
    }
}