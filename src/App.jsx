import { createGlobalStyle } from "styled-components";
import Router from "./routes/Router";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
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
    body{
        width:100%;
        height:100vh;
        overflow : hidden;
    }
    body > #root{
        height : 100vh;
    }
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
