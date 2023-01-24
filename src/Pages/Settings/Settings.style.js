import styled from "styled-components";

import SelecArrowLight from "../../assets/images/select-arrow-light.svg";
import SelecArrowDark from "../../assets/images/select-arrow-dark.svg";

export const SettingsContainer = styled.div`
    max-width: 748px;
    padding: 0 20px;
    margin: 0 auto;
`

export const SettingsForm = styled.form`
    max-width: 708px;
    width: 100%;
    margin-top: 154px;
    margin-bottom: 100px;
`;

export const SettingsFormInner = styled.div`
    margin-bottom: 32px;
    border-bottom: 2px solid #ecf0f3;

    .dark &{
        border-bottom-color: #ecf0f3;
    }
`

export const SettingsTitle = styled.h2`
    margin-top: 0;
    margin-bottom: 32px;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #212121;

    .dark &{
        color: #fffefe;
    }
`;

export const SettingsLabel = styled.label`
    position: relative;
    display: block;
    width: 100%;
    margin-bottom: 10px;
    &::after{
        position: absolute;
        top: 39px;
        right: 22px;
        display: inline-block;
        width: 24px;
        height: 24px;
        margin-left: 20px;
        background-image: url(${SelecArrowLight});
        background-position: center;
        background-repeat: no-repeat;
        content: "";
    }
`

export const SettingsLabelTitle = styled.span`
    display: block;
    width: 100%;
    margin-bottom: 7px;
    font-size: 13px;
    line-height: 20px;
    color: #464e5f;



    .dark &{
        color: #fff;
    }
`
export const SettingsSelect = styled.select`
    width: 100%;
    margin-bottom: 3px;
    padding-top: 12px;
    padding-right: 20px;
    padding-bottom: 11px;
    padding-left: 20px;
    font-size: 14px;
    line-height: 21px;
    color: #464e5f;
    background-color: #f3f6f9;
    border-radius: 4px;
    appearance: none;
    .dark &{
        color: #000;
    }
`
export const SettingsOptions = styled.option``;

export const SettingsLabelDesc= styled.span`
    font-size: 12px;
    line-height: 18px;
    color: #b5b5c3;
    opacity: 0.8;
`;

export const SettingsButtonLabel = styled.label`
    display: inline-block;
    margin-bottom: 40px;
`

export const SettingsText = styled.h3`
    margin-top: 0;
    margin-bottom: 5px;
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    color: #464e5f;

    .dark &{
        color: #fff;
    }
`;

export const SettingsBtn = styled.button`
    display: block;
    max-width: 142px;
    width: 100%;
    margin-left: auto;
    padding-top: 12px;
    padding-right: 12px;
    padding-bottom: 11px;
    padding-left: 12px;

    font-weight: 600;
    font-size: 13px;
    line-height: 20px;
    color: #fff;

    background-color: #152540;
    border-radius: 4px;
    border: none;
    .dark &{
        color: #000;
        background-color: #fff;
    }
`;



export const SettingsCheckBoxWrapper = styled.div`
    position: relative;
`;
export const SettingsCheckBoxLabel = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    width: 87px;
    height: 30px;
    cursor: pointer;
    background: #f3f6f9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 34px;
    &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 28px;
        height: 28px;
        margin: 1px;
        background: #3699ff;
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
        transition: 0.2s;
    }
`;
export const SettingsCheckBox = styled.input`
    opacity: 0;
    z-index: 1;
    border-radius: 15px;
    width: 70px;
    height: 26px;
    &:checked + ${SettingsCheckBoxLabel} {
        background: #f3f6f9;
        &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 28px;
        height: 28px;
        margin-left: 58px;
        transition: 0.2s;
        }
    }
`;