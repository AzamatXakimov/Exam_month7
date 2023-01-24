import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const GenresInner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const GenresTitle = styled.h2`
    margin-top: 0;
    margin-bottom: 22px;
    font-weight: 400;
    font-size: 32px;
    line-height: 48px;
    color: #c9ac8c;
`;

export const GenresNav = styled.nav``;

export const GenresList = styled.ul`
    display: flex;
    align-items: center;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
`;

export const GenresItem = styled.li`
    &:not(:last-child){
        margin-right: 54px;
    }
`;

export const GenresNavLink = styled(NavLink)`
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: var(--main-desc-color);
    opacity: 0.6;
    text-decoration: none;

    &.active{
        color: #c9ac8c;
        opacity: 1;
    }
`;
