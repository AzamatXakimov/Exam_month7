import { ADD_THEME } from "./themeTypes"


const initialStateTheme = {
    theme: localStorage.getItem("theme") || "light",
}

export const ThemeReducer = (state=initialStateTheme, action) => {
    switch (action.type){
        case ADD_THEME: 
            return{
                ...state,
                theme: action.payload
            }
        default : return state
    }
}