import axios from "axios"
import { useState } from "react"
import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { CameraIcon } from "../../assets/images/icons/icons"
import { language } from "../../Lang/Lang"
import { addMe } from "../../redux/me/meActions"
import { ProfileImgBox, ProfileUserDefaultImgTitle, ProfileImg, ProfileWrapperForm, ProfileImgInputLabel, ProfileImgInput, ProfileImgButton, ProfileFormBox, ProfileTitle, ProfileLabel, ProfileFormInner, ProfileLabelText, ProfileInput, ProfileButton, ProfileLabelDesc } from "./Profile.style"
// import { useTranslation } from 'react-i18next';
export const Profile = () => {
    // const {t} = useTranslation()
    const {lang} = useSelector((state) => state.lang)
    const store = useSelector((state) => state.me)
    const storeToken = useSelector((state) => state.token)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isChanged, setIsChanged] = useState(false)

    const ProfileImgInputRef = useRef()
    const ProfilFistNameInputRef = useRef()
    const ProfilLastNameInputRef = useRef()
    const ProfilPhoneInputRef = useRef()

    const hendelSubmit = () => {

        const forData = new FormData();
        forData.append("first_name",  ProfilFistNameInputRef.current.value)
        forData.append("last_name",  ProfilLastNameInputRef.current.value)
        forData.append("phone",   ProfilPhoneInputRef.current.value)
        forData.append("image", ProfileImgInputRef.current.files[0])

        axios.put("http://localhost:5000/user/account", forData ,{
            headers: {
                "Authorization": storeToken.token
            }
        }).then(data => {
            setIsChanged(!isChanged)
            navigate("/")
            console.log(data)
        }).catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get("http://localhost:5000/user/me", {
            headers: {
                "Authorization": `${storeToken.token}` 
            }
        }).then(data => {
            console.log(data);
            dispatch(addMe(data.data))
            localStorage.setItem("me", JSON.stringify(data.data))
        }).catch(err => console.log(err))
    }, [isChanged]);

    return<> 
        <ProfileWrapperForm onSubmit={(evt) => {
            evt.preventDefault();
            hendelSubmit()
        }}>
            <ProfileImgBox>
                {store.me.image ? (
                    <ProfileImg src={`http://localhost:5000/${store.me.image}`} alt="Profile Image"/>
                ) : (<ProfileUserDefaultImgTitle>{store.me.first_name?.[0]}{store.me.last_name?.[0]}</ProfileUserDefaultImgTitle>)}
                <ProfileImgInputLabel>
                    <ProfileImgInput className="visually-hidden" ref={ProfileImgInputRef}  type="file" aria-label="Choose Avatar" required/>
                    <ProfileImgButton>
                        <CameraIcon/>
                    </ProfileImgButton>
                </ProfileImgInputLabel>
            </ProfileImgBox>
            <ProfileFormBox>
                <ProfileFormInner>
                    <ProfileTitle>
                        {/* {t("profile.myProfile")} */}
                        {language[lang].profile.myProfile}
                    </ProfileTitle>

                    <ProfileLabel>
                        <ProfileLabelText>
                            {/* {t("profile.fName")} */}
                            {language[lang].profile.fName}
                        </ProfileLabelText>
                        <ProfileInput type="text" ref={ProfilFistNameInputRef} defaultValue={store.me?.first_name} aria-label="First Name" placeholder={
                            // t("profile.fNameInputPlaceholder")
                            language[lang].profile.fNameInputPlaceholder
                        } minLength={3} required/>
                        <ProfileLabelDesc>
                            {/* {t("profile.fNameInputText")} */}
                            {language[lang].profile.fNameInputText}
                        </ProfileLabelDesc>
                    </ProfileLabel>
                    <ProfileLabel>
                        <ProfileLabelText>
                            {/* {t("profile.lName")} */}
                            {language[lang].profile.lName}
                        </ProfileLabelText>
                        <ProfileInput type="text" ref={ProfilLastNameInputRef} defaultValue={store.me?.last_name} aria-label="Last Name" placeholder={
                            // t("profile.lNameInputPlaceholder")
                            language[lang].profile.lNameInputPlaceholder
                        } minLength={3} required/>
                        <ProfileLabelDesc>
                            {/* {t("profile.lNameInputText")} */}
                            {language[lang].profile.lNameInputText}
                        </ProfileLabelDesc>
                    </ProfileLabel>
                    <ProfileLabel>
                        <ProfileLabelText>
                            {/* {t("profile.phoneText")} */}
                            {language[lang].profile.phoneText}
                        </ProfileLabelText>
                        <ProfileInput type="tel" ref={ProfilPhoneInputRef} defaultValue={store.me?.phone} aria-label="Last Name" placeholder={
                            // t("profile.phoneText")
                            language[lang].profile.phoneText
                        } minLength={9} maxLength={9} required/>
                        <ProfileLabelDesc>
                            {/* {t("profile.phoneDesc")} */}
                            {language[lang].profile.phoneDesc}
                        </ProfileLabelDesc>
                    </ProfileLabel>
                </ProfileFormInner>
                <ProfileButton type="submit">
                    {/* {t("button.saveChange")} */}
                    {language[lang].button.saveChange}
                </ProfileButton>
            </ProfileFormBox>
        </ProfileWrapperForm>
    </>
}