import { ADD_LANG } from "./languageTypes"

export const addLanguage = (lang) => {
    return{
        type: ADD_LANG,
        payload: lang,
    }
}