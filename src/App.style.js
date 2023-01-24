import styled from "styled-components";
import MainBg from "./assets/images/main-bg.png"


export const AppBox = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--main-body-bg-color);
    background-image: url(${MainBg});
    background-repeat: no-repeat;
    background-position: calc(50% + 360px) calc(0% + 309px);
`