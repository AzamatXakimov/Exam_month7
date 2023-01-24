import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { language } from "../../Lang/Lang";
import { Profile } from "../Profile/Profile";
import { Security } from "../Security/Security";
import { Settings } from "../Settings/Settings";
import { UserNav, UserNavItem, UserNavLink, UserNavList, UserWrapper } from "./User.style"
// import { useTranslation } from 'react-i18next';
export const User = () => {
    // const {t} = useTranslation()
    const {lang} = useSelector((state) => state.lang)
    const state = useSelector((state) => state.token)
    const navigate = useNavigate()

    useEffect(() => {
        if(!state.token){
            navigate("/login")
        }
    }, [state.token]);
    return <>
        <UserWrapper>
            <UserNav>
                <UserNavList>
                    <UserNavItem>
                        <UserNavLink to="profile">
                            {/* {t("prfileNavLinks.profile")} */}
                            {language[lang].prfileNavLinks.profile}
                        </UserNavLink>
                    </UserNavItem>
                    <UserNavItem>
                        <UserNavLink to="security">
                            {/* {t("prfileNavLinks.security")} */}
                            {language[lang].prfileNavLinks.security}
                        </UserNavLink>
                    </UserNavItem>
                    <UserNavItem>
                        <UserNavLink to="settings">
                            {/* {t("prfileNavLinks.settings")} */}
                            {language[lang].prfileNavLinks.settings}
                        </UserNavLink>
                    </UserNavItem>
                </UserNavList>
            </UserNav>
            <Routes>
                <Route index element={<Navigate to="profile" replace={true}/>}/>
                <Route path="profile"  element={<Profile/>}/>
                <Route path="security"  element={<Security/>}/>
                <Route path="settings"  element={<Settings />}/>
            </Routes>
        </UserWrapper>
    </>
}