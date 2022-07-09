import reset from 'styled-reset'
import {createGlobalStyle} from "styled-components"
import JoinPage from './pages/JoinPage';
import EmailJoin from './components/ui/join/EmailJoin';
import ProfileSetting from './components/ui/join/ProfileSetting';
import ImageSelect from './components/ui/common/ImageSelect';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * { font-family: 'Spoqa Han Sans Neo', 'sans-serif'; }
`

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      {/* <EmailJoin /> */}
      <ProfileSetting />
    </div>
  );
}

export default App;