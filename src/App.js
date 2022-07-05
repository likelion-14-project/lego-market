import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Test from "./test/test";

function App() {

  return (
          <BrowserRouter>
          <GlobalStyle />
            <Routes>
              <Route path="/" element={<Test />}/>
            </Routes>
          </BrowserRouter>
    );
}

export default App;