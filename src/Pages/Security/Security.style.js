import styled from "styled-components";

export const SecurityWrapper = styled.div`
    max-width: 713px;
    width: 100%;
    margin-top: 68px;
    margin-right: auto;
    margin-left: auto;
`;

export const SecurityForm = styled.form`
    width: 100%;
    padding-left: 4px;
`;

export const SecurityFormTitle = styled.h2`
    margin-top: 0;
    margin-bottom: 32px;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #212121;

    .dark &{
        color: #fff;
    }
`


export const SecurityeLabel = styled.label`
    display: block;
    &:not(:last-child){
        margin-bottom: 22px;
    }
`;

export const SecurityeLabelText = styled.span`
    display: inline-block;
    margin-bottom: 7px;
    font-size: 13px;
    line-height: 20px;
    color: #464e5f;

    .dark &{
        color: #fff;
    }
`
export const SecurityeLabelDesc = styled.span`
    display: inline-block;
    max-width: 201px;
    width: 100%;
    font-size: 12px;
    line-height: 18px;

    color: #b5b5c3;

    opacity: 0.8;

    .dark &{
        color: #fff;
    }
`
export const SecurityeInput = styled.input`
    display: block;
    width: 100%;
    padding-top: 12px;
    padding-right: 20px;
    padding-bottom: 11px;
    padding-left: 20px;

    font-family: 'Poppins';
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #464e5f;

    background-color: #f3f6f9;
    border-radius: 4px;
    border: none;

    .dark &{
        color: #000;
    }
`;

export const SecurityeButton = styled.button`
    display: block;
    max-width: 142px;
    width: 100%;
    margin-top: 89px;
    margin-left: auto;
    padding: 12px 0;
    font-weight: 600;
    font-size: 13px;
    line-height: 20px;
    color: #fff;
    background-color: #152540;
    border-radius: 4px;
    border: none;
    cursor: pointer;

    .dark &{
        color: #000;
        background-color: #fff;
    }
`