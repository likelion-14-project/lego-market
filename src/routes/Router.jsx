import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import Splash from "../pages/Splash";
import SearchUserPage from "../pages/SearchUserPage";
import LoginPage from "../pages/LoginPage";
import JoinPage from "../pages/JoinPage";
import WithoutNav from "./WithoutNav";
import WithNav from "./WithNav";




const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<WithoutNav />}>
                    <Route path="/" element={<Splash />} />
                </Route>
                <Route element={<WithNav/>}>
                        <Route path="/home" element={<Home />} />
                        <Route path="/loginpage" element={<LoginPage />} />
                        <Route path="/search" element={<SearchUserPage />} />
                        <Route path="/joinpage" element={<JoinPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
