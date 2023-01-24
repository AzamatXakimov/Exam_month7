import styled from "styled-components";
import { Link, NavLink  } from "react-router-dom";
import AvatarArrowLight from "../../assets/images/avatar-arrow-light.svg" 
import AvatarArrowDark from "../../assets/images/avatar-arrow-dark.svg" 

export const HeaderTag = styled.header`
    padding: 27px 0;
`;

export const HeaderContainer = styled.div``;

export const HeaderInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const LogoLink = styled(Link)`
    display: inline-block;
    margin-right: 20px;
    color: var(--main-title-color);
`;

export const HeaderBox = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

export const HeaderNav = styled.nav`
    margin-right: 33px;
`;

export const HeaderNavList = styled.ul`
    display: flex;
    align-items: center;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
`;
export const HeaderNavItem = styled.li`
    &:not(:last-child){
        margin-right: 42px;
    }
`;

export const HeaderNavLink = styled(NavLink)`
    font-size: 16px;
    line-height: 144.4%;

    color: var(--main-desc-color);
    text-decoration: none;

    opacity: 0.3;
    &.active{
        opacity: 1;
    }
`;

export const HeaderAvatarButton = styled.button`
    display: inline-flex;
    align-items: center;
    border-radius: 50%;
    border: none;
    background-color: transparent;
    cursor: pointer;

    &::after{
        display: inline-block;
        width: 13px;
        height: 9px;
        margin-left: 12px;
        background-image: url(${AvatarArrowLight});
        background-position: center;
        background-repeat: no-repeat;
        content: "";
    }

    .dark &::after{
        background-image: url(${AvatarArrowDark});
    }
`;

export const HeaderAvatarBox = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 49px;
    height: 49px;
    background-color: #838996;
    border-radius: 50%;
`;
export const HeaderAvatarImg = styled.img`
    width: 49px;
    height: 49px;
    border-radius: 50%;
    object-fit: cover;
`;

export const HeaderAvatarDropDownList = styled.ul`
    position: absolute;
    z-index: 2;
    top: calc(58px);
    right: 0;
    max-width: 140px;
    width: 100%;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
    background-color: #f5f5f5;
    border-radius: 10px;

    .dark &{
        background-color: #222222;
    }
`
export const HeaderAvatarDropDownItem = styled.li`
    width: 100%;
    padding: 8px 24px;
`
export const HeaderAvatarDropDownLink = styled(Link)`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: var(--main-text-color);
    text-decoration: none;
`
export const HeaderAvatarDropDownLogOut = styled.button`
    padding: 0;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: var(--main-text-color);
    background-color: transparent;
    border: none;
    text-decoration: none;
    cursor: pointer;
`