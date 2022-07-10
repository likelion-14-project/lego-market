import Splash from "./pages/Splash";
import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const GlobalStyle = createGlobalStyle`
    ${reset}
    * { font-family: 'Spoqa Han Sans Neo', 'sans-serif'; }
`

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Splash />
        </div>
    );
}

export default App;
