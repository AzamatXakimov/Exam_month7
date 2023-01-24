import { ADD_LANG } from "./languageTypes"


const initialStateLang = {
    lang: localStorage.getItem("lang") || "en",
}

export const LanguageReducer = (state=initialStateLang, action) => {
    switch (action.type){
        case ADD_LANG: 
            return{
                ...state,
                lang: action.payload
            }
        default : return state
    }
}