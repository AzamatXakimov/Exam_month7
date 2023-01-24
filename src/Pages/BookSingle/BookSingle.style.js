import styled from "styled-components";
import ArrowToBottom from "../../assets/images/arrow-to-bottom-book.svg"
import ArrowToBottomLight from "../../assets/images/arrow-to-bottom-book-light.svg"
import { Link } from "react-router-dom";

export const BookSingleContainer = styled.div``;


export const BookSingleInner = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 14px;
    margin-bottom: 100px;
`;


export const BookSingleImg = styled.img`
    width: 505px;
    height: 681px;
    margin-right: 25px;
    object-fit: cover;
    border-radius: 20px;
`;

export const BookSingleInfoBox = styled.div`
    max-width: 671px;
    width: 100%;
    padding-top: 44px;
`;

export const BookSingleTitle = styled.h2`
    margin-top: 0;
    margin-bottom: 12px;
    font-weight: 400;
    font-size: 48px;
    line-height: 72px;
    color: var(--main-title-color);
`;

export const BookSingleInfoMiniBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:not(:last-child){
        margin-bottom: 14px;
    }
`;

export const BookSingleInfoMiniText = styled.span`
    display: inline-block;
    margin-right: 20px;
    font-size: 20px;
    line-height: 30px;
    color: var(--main-desc-color);
    opacity: 0.6;
`

export const BookSingleInfoMiniTitle = styled.span`
    display: inline-block;
    font-size: 20px;
    line-height: 30px;
    color: var(--main-desc-color);
`;


export const BookSingleLineBox = styled.div`
    display: flex;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 12px;
`;

export const BookSingleLineTitle = styled.h3`
    display: inline-flex;
    align-items: center;
    flex-shrink: 0;
    margin-right: 19px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: var(--main-title-color);

    &::after{
        display: inline-block;
        width: 7px;
        height: 12px;
        margin-left: 11px;
        background-image: url(${ArrowToBottomLight});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        content: "";
    }

    .dark &{
        &::after{
            background-image: url(${ArrowToBottom});
        }
    }
`;

export const BookSingleLine = styled.span`
    display: block;
    width: 100%;
    height: 1px;
    background-color: var(--main-title-color);
    opacity: 0.6;
`;

export const BookSingleDesc = styled.p`
    font-size: 16px;
    line-height: 150%;
    color: var(--main-desc-color);
    opacity: 0.8;
`;



export const BookSingleBottomBox = styled.div`
    margin-bottom: 120px;
`
export const BookSingleBottomBoxInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
`


export const BookSingleText = styled.h2`
    margin-top: 0;
    margin-right: 20px;
    margin-bottom: 0;
    font-weight: 400;
    font-size: 31px;
    line-height: 46px;
    color: var(--main-title-color);
`;

export const BookSingleLink = styled(Link)`
    display: inline-block;
    font-size: 16px;
    line-height: 24px;
    color: var(--main-desc-color);
    text-decoration: none;
`;

export const BookSingleList = styled.ul`
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