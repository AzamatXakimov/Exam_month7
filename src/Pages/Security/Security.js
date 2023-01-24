import axios from "axios";
import { useRef } from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { language } from "../../Lang/Lang";
import { SecurityeButton, SecurityeInput, SecurityeLabel, SecurityeLabelDesc, SecurityeLabelText, SecurityForm, SecurityFormTitle, SecurityWrapper } from "./Security.style"
// import { useTranslation } from 'react-i18next';
export const Security = () => {
    // const {t} = useTranslation()
    const {lang} = useSelector((state) => state.lang)
    const store= useSelector((state) => state);
    const navigate = useNavigate()

    const secutiryEmailInputRef = useRef()
    const secutiryCurrentPasswordInputRef = useRef()
    const secutiryNewPasswordInputRef = useRef()

    const hendelSubmit = () => {
        console.log(store.token.token);

        console.log(secutiryEmailInputRef.current.value);
        console.log(secutiryCurrentPasswordInputRef.current.value);
        console.log(secutiryNewPasswordInputRef.current.value);
        axios.put("http://localhost:5000/user/security", {
            email: secutiryEmailInputRef.current.value,
            currentPassword: secutiryCurrentPasswordInputRef.current.value,
            newPassword: secutiryNewPasswordInputRef.current.value,
        } ,{
            headers: {
                "Authorization": store.token.token
            }
        }).then(data => {
            navigate("/")
            console.log(data)
        }).catch(err => console.log(err))
    }
    return <>
        <SecurityWrapper>
            <SecurityForm onSubmit={(evt) => {
                evt.preventDefault()
                hendelSubmit()
            }}>
                <SecurityFormTitle>
                    {/* {t("security.title")} */}
                    {language[lang].security.title}
                </SecurityFormTitle>
                <SecurityeLabel>
                    <SecurityeLabelText>
                        {/* {t("security.email")} */}
                        {language[lang].security.email}
                    </SecurityeLabelText>
                    <SecurityeInput type="email" ref={secutiryEmailInputRef} aria-label="Email" placeholder={
                        // t("security.email")
                        language[lang].security.email
                    } required/>
                    <SecurityeLabelDesc>
                        {/* {t("security.emailDesc")} */}
                        {language[lang].security.emailDesc}
                    </SecurityeLabelDesc>
                </SecurityeLabel>
                <SecurityeLabel>
                    <SecurityeLabelText>
                        {/* {t("security.password")} */}
                        {language[lang].security.password}
                    </SecurityeLabelText>
                    <SecurityeInput type="password" ref={secutiryCurrentPasswordInputRef} aria-label="Enter current password" placeholder={
                        // t("security.passwordPlaceholder")
                        language[lang].security.passwordPlaceholder
                    } minLength={3} required/>
                    <SecurityeLabelDesc>
                        {/* {t("security.passwordDesc")} */}
                        {language[lang].security.passwordDesc}
                    </SecurityeLabelDesc>
                </SecurityeLabel>
                <SecurityeLabel>
                    <SecurityeLabelText>
                        {/* {t("security.newPassword")} */}
                        {language[lang].security.newPassword}
                    </SecurityeLabelText>
                    <SecurityeInput type="password" ref={secutiryNewPasswordInputRef}  aria-label="Enter new Password" placeholder={
                        // t("security.newPasswordPlaceHolder")
                        language[lang].security.newPasswordPlaceHolder
                    } minLength={3} required/>
                    <SecurityeLabelDesc>
                        {/* {t("security.newPasswordDesc")} */}
                        {language[lang].security.newPasswordDesc}
                    </SecurityeLabelDesc>
                </SecurityeLabel>
                <SecurityeButton type="submit">
                    {/* {t("button.saveChange")} */}
                    {language[lang].button.saveChange}
                </SecurityeButton>
            </SecurityForm>
        </SecurityWrapper>
    </>
}