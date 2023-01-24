import { Link } from "react-router-dom";
import styled from "styled-components";

export const BookCardItem = styled.li`
    max-width: 190px;
    width: 100%;
    margin-bottom: 24px;
    
    &:not(:nth-child(6n)){
        margin-right: 20px;
    }
`;

export const BookCardItemSingle = styled.li`
    max-width: 190px;
    width: 100%;
    margin-right: 20px;
`;

export const BookCardLink = styled(Link)`
    display: block;
    text-decoration: none;
`

export const BookCardImg = styled.img`
    width: 190px;
    height: 283px;
    margin-bottom: 12px;
    object-fit: cover;
    border-radius: 15px;
`;

export const BookCardTitle = styled.h3`
    margin-top: 0;
    margin-bottom: 6px;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: var(--main-text-color);
`
export const BookCardDesc = styled.p`
    margin-top: 0;
    margin-bottom: 0;
    font-size: 16px;
    line-height: 24px;
    color: var(--main-desc-color);
    opacity: 0.6;
`
