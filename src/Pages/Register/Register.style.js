import styled from "styled-components";
import { Link } from "react-router-dom" 

export const RegisterWrapper = styled.div`
    max-width: 1192px;
    padding: 0 20px;
    width: 100%;
    margin: 0 auto;   
    overflow: hidden;
`;
export const RegisterInner = styled.div`
    display: flex;
    align-items: center;
    /* margin-top: 20px; */
`;

export const RegisterImgBox = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
    margin-right: 112px;
    /* padding: 100px 40px; */
    padding: 0 38px;
    background-color: #c9ac8c;
`

export const RegisterImg = styled.img`
    width: 500px;
    height: 500px;
`;

export const RegisterForm = styled.form`
    max-width: 330px;
    width: 100%;
`;

export const RegisterTitle = styled.h2`
    margin-top: 0;
    margin-bottom: 10px;
    font-family: "Arial Black";
    font-weight: 900;
    font-size: 36px;
    line-height: 51px;
    color: #000;

    .dark &{
        color: #fff
    }
`
export const RegisterDesc = styled.p`
    margin-top: 0;
    margin-bottom: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;

    color: #000;

    .dark &{
        color: #fff
    }
`;

export const RegisterLink = styled(Link)`
    color: #549ff9;
    text-decoration: none;
`;

export const RegisterInputLabel = styled.label`
    display: inline-block;
    max-width: 330px;
    width: 100%;

    &:not(:last-child){
        margin-bottom: 17px;
    }
`

export const RegisterInput = styled.input`
    display: inline-block;
    max-width: 330px;
    width: 100%;
    padding-top: 16px;
    padding-bottom: 10px;
    padding-right: 29px;
    padding-left: 29px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;

    color: #000;

    background-color: transparent;
    border: 1px solid #b4b4bb;
    border-radius: 10px;

    &::placeholder{
        color: #aaa;
    }

    .dark &{
        color: #fff;
    }
`;

export const RegisterInvalidMessage = styled.span`
    display: inline-block;
    margin-left: 10px;
    font-size: 13px;
    color: #f03f3c;
`

export const RegisterButton = styled.button`
    display: inline-block;
    max-width: 330px;
    width: 100%;
    margin-top: 34px;
    padding: 5px 20px;
    font-family: "Red Hat Display";
    font-weight: 500;
    font-size: 18px;
    line-height: 36px;
    color: #fff;

    background-color: #152540;
    border-radius: 99px;
    border: none;

    .dark &{
        color: #000;
        background-color: #fff;
    }
`