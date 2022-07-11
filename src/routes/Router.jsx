import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import Splash from "../pages/Splash";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Splash />} />
                <Route path="/home" element={<Home />} />
                {/* 여기에 추가 하시면 됩니다 !  */}
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
