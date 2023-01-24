import { Link } from "react-router-dom";
import styled from "styled-components";

export const AuthorSingleContainer = styled.div``;

export const AuthorSingleInner = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 14px;
    margin-bottom: 100px;
`;

export const AuthorSingleImg = styled.img`
    width: 505px;
    height: 681px;
    margin-right: 25px;
    object-fit: cover;
    border-radius: 20px;
`;

export const AuthorSingleInfoBox = styled.div`
    max-width: 671px;
    width: 100%;
    padding-top: 44px;
`;

export const AuthorSingleTitle = styled.h2`
    margin-top: 0;
    margin-bottom: 8px;
    font-weight: 400;
    font-size: 48px;
    line-height: 72px;
    color: var(--main-title-color);
`;

export const AuthorSingleDesc =styled.p`
    margin-top: 0;
    margin-bottom: 44px;
    font-size: 16px;
    line-height: 24px;

    color: var(--main-desc-color);
    opacity: 0.8;
`;

export const AuthorSingleYearBox = styled.div`
    display: flex;
    align-items: center;
`;

export const AuthorSingleYearInner = styled.div``;

export const AuthorSingleYearDesc = styled.span`
    display: block;
    font-size: 12px;
    line-height: 18px;
    color: var(--main-desc-color);
    opacity: 0.6;
`;

export const AuthorSingleYearText = styled.span`
    display: block;
    font-size: 39px;
    line-height: 144.4%;
    color: var(--main-title-color);
`;

export const AuthorSingleYearDash = styled.span`
    display: inline-block;
    margin-right: 16px;
    margin-left: 16px;
    font-size: 39px;
    line-height: 144.4%;
    color: var(--main-title-color);
`;


export const AuthorSingleBottomBox = styled.div`
    margin-bottom: 120px;
`
export const AuthorSingleBottomBoxInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
`


export const AuthorSingleText = styled.h2`
    margin-top: 0;
    margin-right: 20px;
    margin-bottom: 0;
    font-weight: 400;
    font-size: 31px;
    line-height: 46px;
    color: var(--main-title-color);
`;

export const AuthorSingleLink = styled(Link)`
    display: inline-block;
    font-size: 16px;
    line-height: 24px;
    color: var(--main-desc-color);
    text-decoration: none;
`;

export const AuthorSingleList = styled.ul`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    width: 100%;
    overflow-x: scroll;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
`