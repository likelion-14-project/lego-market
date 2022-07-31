import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
export const GlobalStyle = createGlobalStyle`
        :root {
        --main-color: #F26e22;
        --gray-text: #767676;
    }
    ${reset}
    * { font-family: 'Spoqa Han Sans Neo', 'sans-serif'; }
    button{border: none;}
    a{text-decoration: none;}
    a:focus { text-decoration: none; }
    a:hover, a:active { text-decoration: none; }
    body > #root{
        width:100%;
        height:100vh;
        overflow : hidden;
    }
    a:link {
    color: --gray-text;
    }
    a{
        color: #000;
    }
    button {
        background-color: #fff;
    }
    .visually_hidden { 
        position: absolute; 
        clip: rect(0 0 0 0); 
        width: 1px;
        height: 1px; 
        margin: -1px; 
        overflow: hidden;
    }
`;

