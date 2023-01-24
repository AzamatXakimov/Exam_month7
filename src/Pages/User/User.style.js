import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const UserWrapper = styled.div`
    max-width: 1240px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
`;


export const UserNav = styled.nav``;

export const UserNavList = styled.ul`
    display: flex;
    align-items: center;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
`;

export const UserNavItem = styled.li`
    max-width: 400px;
    width: 100%;
    &:nth-child(2) a::before{
        content: "2"
    }
    &:nth-child(3) a::before{
        content: "3"
    }
`;

export const UserNavLink = styled(NavLink)`
    display: inline-flex;
    align-items: center;
    max-width: 400px;
    width: 100%;
    padding-top: 22px;
    padding-right: 23px;
    padding-bottom: 22px;
    padding-left: 23px;

    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #464e5f;
    background-color: #f3f6f9;
    border-radius: 4px 4px 0px 0px;
    text-decoration: none;

    &::before{
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        margin-right: 8px;

        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: #3699ff;
        background-color: #e5eaee;
        border: 1px solid #e5eaee;
        border-radius: 4px;
        content: "1";
    }

    &.active{
        color: #152540;
        background-color: #dde6f5;
        &::before{
            color: #fff;
            background-color: #152540;
            border-color: #152540;
        }
    }

    .dark &{
        color: #a3a3a3;
        background-color: #2d2d2d;
        &::before{
            background-color: transparent;
            color: #a3a3a3;
            border: 1px solid #a3a3a3;
        }

        &.active{
            color: #000;
            background-color: #dde6f5;
            &::before{
                color: #fff;
                background-color: #000;
                border-color: #000;
            }
        }
    }
`;