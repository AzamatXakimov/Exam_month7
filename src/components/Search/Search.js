import { SerachIcon } from "../../assets/images/icons/icons";
import { useSelector } from "react-redux/es/exports"; 
import { SearchButton, SearchButtonIcon, SearchInner, SearchInput, SearchTitle, SearchWrapper, SerachForm } from "./Search.style"
import { language } from "../../Lang/Lang";
// import { useTranslation } from 'react-i18next';
export const Search = ({inputRef, hendelSubmit, debounce}) => {
    // const {t} = useTranslation()
    const {lang} = useSelector((state) => state.lang)
    return <>
        <SearchWrapper>
            <SearchInner>
                <SearchTitle>
                    {/* {t("search.search")} */}
                    {language[lang].search.search}
                </SearchTitle>
                <SerachForm onSubmit={(evt) => {
                    evt.preventDefault();
                    hendelSubmit()
                }}>
                    <SearchInput onInput={debounce(2000)} type="search" ref={inputRef} placeholder={
                        // t("search.searchInputPlaceholder")
                        language[lang].search.searchInputPlaceholder
                    }/>
                    <SearchButton type="submit">
                        <SearchButtonIcon>
                            <SerachIcon/>
                        </SearchButtonIcon>
                        {/* {t("search.searchv2")} */}
                        {language[lang].search.searchv2}
                    </SearchButton>
                </SerachForm>
            </SearchInner>
        </SearchWrapper>
    </>
}