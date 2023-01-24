import { HeaderAvatarBox, HeaderAvatarButton, HeaderAvatarDropDownItem, HeaderAvatarDropDownLink, HeaderAvatarDropDownList, HeaderAvatarDropDownLogOut, HeaderAvatarImg, HeaderBox, HeaderContainer, HeaderInner, HeaderNav, HeaderNavItem, HeaderNavLink, HeaderNavList, HeaderTag, LogoLink } from "./Header.style";
import { Logo } from "../../assets/images/icons/icons";
import { useSelector, useDispatch } from "react-redux";
import { deleteToken } from "../../redux/token/tokenActions";
import { useNavigate } from "react-router-dom"
import { useState } from "react";
// import { useTranslation } from "react-i18next";
import { language } from "../../Lang/Lang";
export const Header = () => {
    // const {t} = useTranslation()
    const store = useSelector((state) => state.me)
    const {lang} = useSelector((state) => state.lang)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [DropDownOpen, setDropDownOpen] = useState(false)
    return <>
        <HeaderTag>
            <HeaderContainer className="container">
                <HeaderInner>
                    <LogoLink to="/">
                        <Logo />
                    </LogoLink>

                    <HeaderBox>
                        <HeaderNav>
                            <HeaderNavList>
                                <HeaderNavItem>
                                    <HeaderNavLink to="authors" className={({isActive}) => isActive ? "active" : ""}>
                                        {/* {t("header.authors")} */}
                                        {language[lang].header.authors}
                                    </HeaderNavLink>
                                </HeaderNavItem>
                                <HeaderNavItem>
                                    <HeaderNavLink to="books" className={({isActive}) => isActive ? "active" : ""}>
                                        {/* {t("header.books")} */}
                                        {language[lang].header.books}
                                    </HeaderNavLink>
                                </HeaderNavItem>
                            </HeaderNavList>
                        </HeaderNav>

                        <HeaderAvatarButton  type="button" onClick={() => {
                            setDropDownOpen(!DropDownOpen)
                        }}>
                            {store.me.image ? (
                                <HeaderAvatarImg src={`http://localhost:5000/${store.me.image}`} alt="Profile Image"/>
                            ) : (<HeaderAvatarBox>{store.me.first_name?.[0]}{store.me.last_name?.[0]}</HeaderAvatarBox>)}
                        </HeaderAvatarButton>
                        
                        <HeaderAvatarDropDownList style={DropDownOpen ? {display: "block"} : {display: "none"}}>
                            <HeaderAvatarDropDownItem>
                                <HeaderAvatarDropDownLink to="/user">
                                    {/* {t("header.profile")} */}
                                    {language[lang].header.profile}
                                </HeaderAvatarDropDownLink>
                            </HeaderAvatarDropDownItem>
                            <HeaderAvatarDropDownItem>
                                <HeaderAvatarDropDownLink to="/add-author">
                                    {/* {t("header.addAuthor")} */}
                                    {language[lang].header.addAuthor}
                                </HeaderAvatarDropDownLink>
                            </HeaderAvatarDropDownItem>
                            <HeaderAvatarDropDownItem>
                                <HeaderAvatarDropDownLink to="/add-book">
                                    {/* {t("header.addBook")} */}
                                    {language[lang].header.addBook}
                                </HeaderAvatarDropDownLink>
                            </HeaderAvatarDropDownItem>
                            <HeaderAvatarDropDownItem>
                                <HeaderAvatarDropDownLogOut type="button" onClick={() => {
                                    dispatch(deleteToken())
                                    localStorage.removeItem("token");
                                    localStorage.removeItem("me");
                                    navigate("/")
                                }}>
                                    {/* {t("header.logOut")} */}
                                    {language[lang].header.logOut}
                                </HeaderAvatarDropDownLogOut>
                            </HeaderAvatarDropDownItem>
                        </HeaderAvatarDropDownList>
                    </HeaderBox>
                </HeaderInner>
            </HeaderContainer>
        </HeaderTag>
    </>
}
