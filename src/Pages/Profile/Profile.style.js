import styled from "styled-components";

export const ProfileWrapperForm = styled.form`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 993px;
    width: 100%;
    margin-top: 83px;
    margin-right: auto;
    margin-left: auto;
`

export const ProfileImgBox = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 175px;
    height: 175px;
    border-radius: 50%;
    background-color: #838996;
`;

export const ProfileImg = styled.img`
    width: 175px;
    height: 175px;
    border-radius: 50%;
    object-fit: cover;
`;

export const ProfileUserDefaultImgTitle = styled.h2`
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 400;
    font-size: 48px;
    line-height: 72px;
    color: #000;
`;

export const ProfileImgInputLabel = styled.label`
    position: absolute;
    right: 7px;
    bottom: -14px;
`
export const ProfileImgInput = styled.input``;

export const ProfileImgButton = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background-color: #f3f6f9;
    border-radius: 8px;
    cursor: pointer;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    .dark &{
        background-color: #161616;
    }
`;

export const ProfileFormBox = styled.div`
    max-width: 712px;
    width: 100%;
    padding-top: 43px;
`;
export const ProfileFormInner = styled.div`
    border-bottom: 1px solid #ecf0f3;
    padding-bottom: 26px;
    .dark &{
        border-bottom-color: #161d23;
    }
`;

export const ProfileTitle = styled.h2`
    margin-top: 0;
    margin-bottom: 32px;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #212121;

    .dark &{
        color: #dedede;
    }
`;

export const ProfileLabel = styled.label`
    display: block;
    &:not(:last-child){
        margin-bottom: 22px;
    }
`;

export const ProfileLabelText = styled.span`
    display: inline-block;
    margin-bottom: 7px;
    font-size: 13px;
    line-height: 20px;
    color: #464e5f;

    .dark &{
        color: #f3f6f9;
    }
`
export const ProfileLabelDesc = styled.span`
    display: inline-block;
    max-width: 171px;
    width: 100%;
    font-size: 12px;
    line-height: 18px;

    color: #b5b5c3;

    opacity: 0.8;

    .dark &{
        color: #f3f6f9;
    }
`
export const ProfileInput = styled.input`
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

export const ProfileButton = styled.button`
    display: block;
    max-width: 142px;
    width: 100%;
    margin-top: 44px;
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
        color: #0d0d0d;
        background-color: #f1f6ff;
    }
`