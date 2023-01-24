import { createGlobalStyle } from "styled-components";
import Poppins400w2 from "../assets/fonts/poppins-v20-latin-regular.woff2";
import Poppins400w from "../assets/fonts/poppins-v20-latin-regular.woff";
import Rotterburg400w2 from "../assets/fonts/Rotterburg-Display-Font.woff2";
import Rotterburg400w from "../assets/fonts/Rotterburg-Display-Font.woff";
import ArialBlackw2 from "../assets/fonts/arial_bold.woff2";
import ArialBlackw from "../assets/fonts/arial_bold.woff";
import Poppins500w2 from "../assets/fonts/poppins-v20-latin-500.woff2";
import Poppins500w from "../assets/fonts/poppins-v20-latin-500.woff";
import RedHat500w from "../assets/fonts/red-hat-display-v14-latin-500.woff2";
import RedHat500w2 from "../assets/fonts/red-hat-display-v14-latin-500.woff";
import Poppins600w2 from "../assets/fonts/poppins-v20-latin-600.woff2";
import Poppins600w from "../assets/fonts/poppins-v20-latin-600.woff";

const GlobalStyles = createGlobalStyle`
    /* ROOT */
    :root{
        --main-font-family: "Poppins", "Arial", sans-serif;
        --main-font-weight: 400;
        --main-body-bg-color: #fff;
        --main-title-color: #d1b89d;
        --main-text-color: #000;
        --main-desc-color: #0D0D0D;
    }


    @font-face {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: 
            url(${Poppins400w2}) format("woff2"),
            url(${Poppins400w}) format("woff");
    }

    @font-face {
        font-family: "Rotterburg Stylish FREE";
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src:
            url(${Rotterburg400w2}) format("woff2"), 
            url(${Rotterburg400w}) format("woff");
    }

    @font-face {
        font-family: "Arial Black";
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src:
            url(${ArialBlackw2}) format("woff2"), 
            url(${ArialBlackw}) format("woff");
    }

    @font-face {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: 
            url(${Poppins500w2}) format("woff2"),
            url(${Poppins500w}) format("woff");
    }

    @font-face {
        font-family: "Red Hat Display";
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: 
            url(${RedHat500w}) format("woff2"),
            url(${RedHat500w2}) format("woff"); 
    }

    @font-face {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: 
            url(${Poppins600w2}) format("woff2"),
            url(${Poppins600w}) format("woff");
    }

    *,*::before, *::after {
        box-sizing: border-box;
    }

    html{
        height: 100%;
        scroll-behavior: smooth;
    }

    img{
        display: block;
        height: auto;
    }

    body{
        display: flex;
        flex-direction: column;
        height: 100%;
        margin: 0;
        font-family: var(--main-font-family);
        font-weight: var(--main-font-weight);
    }

    .root{
        flex-grow: 1;
    }

    .container{
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 20px;
    }
    
    main{
        flex-grow: 1;
    }

    .visually-hidden {
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px;
    }

    .dark{
        --main-body-bg-color: #191919;
        --main-title-color: #c9ac8c;
        --main-text-color: #c9ac8c;
        --main-desc-color: #fff;
    }
`;

export default GlobalStyles;