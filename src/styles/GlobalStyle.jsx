import { createGlobalStyle } from "styled-components";
import reset from "styled-reset"
const GlobalStyle = createGlobalStyle`
        :root {
        --main-color: #F26e22;
        --gray-text: #767676;
        --border-radius: 2.75em;
    }

    /* 공통 css */
    ${reset},
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
    ol, ul {
    list-style: none;
    }

    html {
        font-size: 16px;
        /* 크롬 기본폰트사이즈 */
    }

    body {
        position: relative;
        width: 100vw;
        height: 100vh;
        overflow-y: hidden;
    }

    input,
    button {
        font-size: inherit;
        font-family: inherit;
    }

    button {
        cursor: pointer;
    }


    a {
        border-radius: 0.8rem;
        overflow: hidden;
    }
    img {
        vertical-align: bottom;
    }

    button{border: none;}
    a{text-decoration: none;}
    a:focus { text-decoration: none; }
    a:hover, a:active { text-decoration: none; }
    a {
    color: --gray-text;
    }
    .visually_hidden { 
        position: absolute; 
        clip: rect(0 0 0 0); 
        width: 1px;
        height: 1px; 
        margin: -1px; 
        overflow: hidden;
    }
    .wrapper-account {
        width: 322px;
        padding: 0 34px;
    }
`
export default GlobalStyle;