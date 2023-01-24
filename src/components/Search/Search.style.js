import styled from "styled-components";

export const SearchWrapper = styled.div`
    position: relative;
    bottom: 78px;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1030px;
    width: 100%;
    margin-right: auto;
    margin-bottom: 22px;
    margin-left: auto;
    padding-top: 29px;
    padding-bottom: 29px;
    background: var(--main-body-bg-color);
    box-shadow: 0px 4px 77px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
`;

export const SearchInner = styled.div`
    max-width: 884px;
    width: 100%;
`;

export const SearchTitle = styled.h2`
    margin-top: 0;
    margin-bottom: 9px;
    font-weight: 400;
    font-size: 32px;
    line-height: 48px;
    text-align: center;
    color: var(--main-title-color);
`;

export const SerachForm = styled.form`
    display: flex;
    align-items: center;
`

export const SearchInput = styled.input`
    display: inline-block;
    max-width: 710px;
    width: 100%;
    margin-right: 14px;
    padding: 12px 27px;
    font-size: 16px;
    line-height: 24px;
    color: #0d0d0d;
    background-color: #f5f5f5;
    border-radius: 15px;
    border: none;

    &::placeholder{
        color: #0d0d0d;
        opacity: 0.3;
    }

    .dark &{
        color: #fff;
        background-color: #404040;
    }
    .dark &::placeholder{
        color: #fff;
    }
`;

export const SearchButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    max-width: 160px;
    width: 100%;
    padding-top: 12px;
    padding-bottom: 12px;

    font-size: 16px;
    line-height: 24px;
    color: #efdac3;

    background-color: #c9ac8c;
    border-radius: 15px;
    border: none;

    .dark &{
        color: #3c2710;
    }
`
export const SearchButtonIcon = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 6px;
`