import styled from "styled-components";
import SelecArrowLight from "../../assets/images/select-arrow-light.svg";
import SelecArrowDark from "../../assets/images/select-arrow-dark.svg";

export const AddAuthorWrapper = styled.div`
    max-width: 1192px;
    padding: 0 20px;
    width: 100%;
    margin: 0 auto;   
    overflow: hidden;
`;

export const AddAuthorForm = styled.form`
    display: flex;
    align-items: center;
`;

export const AddAuthorImgBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 578px;
    width: 100%;
    height: 100vh;
    margin-right: 123px;
    background-color: rgba(243, 243, 243, 0.93);

    .dark &{
        background-color: #1b1b1b;
    }
`

export const AddAuthorImgLable = styled.label`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 315px;
    width: 100%;
    height: 428px;
    margin: 0 auto;
    background-color: #f8f8f8;
    border: 1px dashed rgba(0, 0, 0, 0.3);
    border-radius: 17px;
    cursor: pointer;

    .dark &{
        background-color: #4d4d4d;
        border-color: rgba(255, 255, 255, 0.3);
    }
`
export const AddAuthorImgInput = styled.input`
    bottom: 0;
    left: 50%;
`
export const AddAuthorImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 17px;
`

export const AddAuthorInoutBox = styled.div`
    max-width: 330px;
    width: 100%;
`;

export const AddAuthorTitle = styled.h2`
    margin-top: 0;
    margin-bottom: 12px;
    font-weight: 600;
    font-size: 32px;
    line-height: 48px;
    color: #000;

    .dark &{
        color: #fff;
    }
`;

export const AddAuthorInput = styled.input`
    display: block;
    width: 100%;
    margin-bottom: 16px;
    padding-top: 13px;
    padding-right: 22px;
    padding-bottom: 12px;
    padding-left: 22px;

    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #000;
    background-color: #fff;

    border: 1px solid #b4b4bb;
    border-radius: 10px;

    &::placeholder{
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        color: #aaa;
    }

    .dark &{
        color: #fff;
        background-color: #191919;
    }
`;

export const AddAuthorLabel = styled.label`
    position: relative;
    display: block;
    width: 100%;
    margin-bottom: 16px;
    &::after{
        position: absolute;
        top: 11px;
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

    .dark{
        &::after{
            background-image: url(${SelecArrowDark});
        }
    }
`
export const AddAuthorSelect = styled.select`
    display: block;
    width: 100%;
    padding-top: 13px;
    padding-right: 22px;
    padding-bottom: 12px;
    padding-left: 22px;

    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #aaa;

    border: 1px solid #b4b4bb;
    border-radius: 10px;
    appearance: none;
    background-color: #fff;


    .dark &{
        color: #fff;
        background-color: #191919;
    }
`;
export const AddAuthorOption = styled.option`
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #000;
    .dark &{
        color: #fff;
    }
`;

export const AddAuthorTextAria = styled.textarea`
    display: block;
    width: 100%;
    height: 82px;
    margin-bottom: 44px;
    padding-top: 13px;
    padding-right: 22px;
    padding-bottom: 12px;
    padding-left: 22px;

    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #000;

    border: 1px solid #b4b4bb;
    border-radius: 10px;
    background-color: #fff;
    resize: none;

    &::placeholder{
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        color: #aaa;
    }
    
    .dark &{
        color: #fff;
        background-color: #191919;
    }
`;

export const AddAuthorTextBtn = styled.button`
    display: block;
    width: 100%;
    padding-top: 5px;
    padding-right: 20px;
    padding-bottom: 5px;
    padding-left: 20px;

    font-weight: 500;
    font-size: 18px;
    line-height: 36px;
    text-align: center;
    color: #fff;
    background-color: #152540;
    border-radius: 99px;
    cursor: pointer;
    border: none;

    .dark &{
        color: #000;
        background-color: #fff;
    }
`;

export const AddAuthorImgDescBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 169px;
    width: 100%;
    margin: 0 auto;
`
export const AddAuthorImgDesc = styled.p`
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;

    opacity: 0.3;

    .dark &{
        color: #fff;
    }
`