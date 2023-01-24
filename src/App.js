import { Routes, Route } from "react-router-dom";
import { AppBox } from "./App.style";
import { Home } from "./Pages/Home/Home";
import { Login } from "./Pages/Login/Login";
import { Register } from "./Pages/Register/Register";
import GlobalStyles from "./styles/globalStyles";
import { useSelector } from "react-redux/es/exports";
import { User    } from "./Pages/User/User";
import { AddAuthor } from "./Pages/AddAuthor/AddAuthor";
import { AddBook } from "./Pages/AddBook/AddBook";
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import { language } from "./Lang/Lang";

export const App = () => {
    const {theme, lang} = useSelector((state) => state);

    // i18n
    //     .use(initReactI18next)
    //     .init({
    //         fallbackLng: "en",
    //         interpolation: {
    //             escapeValue: false, 
    //         },
    //         resources: {
    //             en: {
    //                 translation: language.en,
    //             },
    //             ru: {
    //                 translation: language.ru,
    //             },
    //             uz: {
    //                 translation: language.uz,
    //             },
    //         }
    //     });

    return <>
        <AppBox className={theme.theme}>
            <Routes>
                <Route path="/*" element={<Home/>}/>
                <Route path="/user/*" element={<User/>}/>
                <Route path="/add-author" element={<AddAuthor />}/>
                <Route path="/add-book" element={<AddBook  />}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </AppBox>
        <GlobalStyles />
    </>
}
