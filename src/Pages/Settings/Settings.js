import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux/es/exports"
import { addTheme } from "../../redux/theme/themeActions"
import { SettingsBtn, SettingsButtonLabel, SettingsCheckBox, SettingsCheckBoxLabel, SettingsCheckBoxWrapper, SettingsContainer, SettingsForm, SettingsFormInner, SettingsLabel, SettingsLabelDesc, SettingsLabelTitle, SettingsOptions, SettingsSelect, SettingsText, SettingsTitle } from "./Settings.style"
// import { useTranslation } from 'react-i18next';
import { addLanguage } from "../../redux/language/languageActions";
import { language } from "../../Lang/Lang";
export const Settings = () => {
    // const {t} = useTranslation()
    const dispatch = useDispatch()
    const LanguageSelectRef = useRef();
    const ThemeInputRef = useRef();
    const {theme, lang} = useSelector((state) => state);

    const hendelSubmit = () => {
        dispatch(addLanguage(LanguageSelectRef.current.value))
        localStorage.setItem("lang", LanguageSelectRef.current.value)
        if(ThemeInputRef.current.checked){
            dispatch(addTheme("dark"));
            localStorage.setItem("theme", "dark");
        }
        else{
            dispatch(addTheme("light"));
            localStorage.setItem("theme", "light");
        }
    }

    return <>
        <SettingsContainer>
            <SettingsForm onSubmit={(evt) => {
                evt.preventDefault()
                hendelSubmit()
            }}>
                <SettingsFormInner>
                    <SettingsTitle>
                        {/* {t("settings.title")} */}
                        {language[lang.lang].settings.title}
                    </SettingsTitle>
                    <SettingsLabel>
                        <SettingsLabelTitle>
                            {/* {t("settings.selectTitle")} */}
                            {language[lang.lang].settings.selectTitle}
                        </SettingsLabelTitle>
                        <SettingsSelect defaultValue={lang.lang} ref={LanguageSelectRef}>
                            <SettingsOptions value="en">English</SettingsOptions>
                            <SettingsOptions value="ru">Russian</SettingsOptions>
                            <SettingsOptions value="uz">Uzbek</SettingsOptions>
                        </SettingsSelect>
                        <SettingsLabelDesc>
                            {/* {t("settings.selectDesc")} */}
                            {language[lang.lang].settings.selectDesc}
                        </SettingsLabelDesc>
                    </SettingsLabel>

                    <SettingsButtonLabel>
                        <SettingsText>
                            {/* {t("settings.theme")} */}
                            {language[lang.lang].settings.theme}
                        </SettingsText>
                        <SettingsCheckBoxWrapper>
                            <SettingsCheckBox ref={ThemeInputRef} id="checkbox" type="checkbox" defaultChecked={theme.theme === "dark"} />
                            <SettingsCheckBoxLabel htmlFor="checkbox" />
                        </SettingsCheckBoxWrapper>
                    </SettingsButtonLabel>
                </SettingsFormInner>
                <SettingsBtn type="submit">
                    {/* {t("button.saveChange")} */}
                    {language[lang.lang].button.saveChange}
                </SettingsBtn>
            </SettingsForm>
        </SettingsContainer>
    </>
}