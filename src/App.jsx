import { createGlobalStyle } from "styled-components";
import Router from "./routes/Router";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    * { font-family: 'Spoqa Han Sans Neo', 'sans-serif'; }
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
    body{
        width : 100%;
        height : 100vh;
    }
    .mainWrapper {
        width : 390px;
        margin : auto;
    }
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <Router />
        </>
    );
}

export default App;
