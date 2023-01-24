import { Link } from "react-router-dom";
import styled from "styled-components";
import AuthorCardBgImg from "../../assets/images/Author-card-bg.png";
import AuthorCardBgImgDark from "../../assets/images/Author-card-bg-dark.png";

export const AuthorCardItem = styled.li`
    max-width: 295px;
    width: 100%;

    margin-bottom: 24px;

    &:not(:nth-child(4n)){
        margin-right: 20px;
    }
`;

export const AuthorCardLink = styled(Link)`
    display: block;
    text-decoration: none;
`

export const AuthorCardImg = styled.img`
    width: 295px;
    height: 224px;
    border-radius: 22px 22px 0px 0px;
    object-fit: cover;
`;

export const AuthorCardTextBox = styled.div`
    padding-top: 12px;
    padding-right: 16px;
    padding-bottom: 63px;
    padding-left: 16px;
    background-color: #f5f5f5;
    border-radius:  0px 0px 22px 22px;
    background-image: url(${AuthorCardBgImg}), url(${AuthorCardBgImg});
    background-position: calc(50% + 140px) calc(50% - 30px), calc(50% - 135px) calc(50% + 90px);
    background-repeat: no-repeat;

    .dark &{
        background-color: #1e1e1e;
        background-image: url(${AuthorCardBgImgDark}), url(${AuthorCardBgImgDark});
    }
`

export const AuthorCardTitle = styled.h3`
    margin-top: 0;
    margin-bottom: 6px;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color: var(--main-text-color);
`;

export const AuthorCardText = styled.span`
    display: inline-block;
    font-size: 16px;
    line-height: 24px;
    color: #000;
    opacity: 0.6;
    
    .dark &{
        color: #fff;
    }
`
