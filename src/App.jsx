import reset from 'styled-reset'
import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
  ${reset}

  * { font-family: 'Spoqa Han Sans Neo', 'sans-serif'; }
`

function App() {
  return (
    <div className="App">
      <GlobalStyle />
    </div>
  );
}

export default App;