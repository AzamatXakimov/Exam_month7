import { combineReducers } from "redux";
import { LanguageReducer } from "./language/languageReducer";
import { MeReducer } from "./me/meReducer";
import { ThemeReducer } from "./theme/themeReducer";
import { TokebReducer } from "./token/tokenReducer";


export const RootRedusers = combineReducers({
    token: TokebReducer,
    theme: ThemeReducer,
    me: MeReducer,
    lang: LanguageReducer,
}) 