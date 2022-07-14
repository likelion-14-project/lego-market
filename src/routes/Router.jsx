import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import Splash from "../pages/Splash";
import SearchUserPage from "../pages/SearchUserPage";
import LoginPage from "../pages/LoginPage";
import JoinPage from "../pages/JoinPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Splash />} />
                <Route path="/home" element={<Home />} />
                <Route path="/loginpage" element={<LoginPage />} />
                <Route path="/search" element={<SearchUserPage />} />
                <Route path="/joinpage" element={<JoinPage />} />
                {/* 여기에 추가 하시면 됩니다 !  */}
                <Route path="/myprofile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
