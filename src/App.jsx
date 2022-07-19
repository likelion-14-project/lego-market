import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
// import SearchUseHook from "./pages/SearchUseHook";
import GlobalStyle from "./styles/GlobalStyle";


function App() {

  return (
    
    <div>
      {/* <SearchUseHook/> */}
          <BrowserRouter>
          <GlobalStyle />
            <Routes>
              <Route path="/login" element={<Login/>}/>
              <Route path="/AddProduct" element={<AddProduct/>}/>
              <Route path="/ProductList" element={<ProductList/>}/>
            </Routes>
          </BrowserRouter>
          </div>
          );
}

export default App;