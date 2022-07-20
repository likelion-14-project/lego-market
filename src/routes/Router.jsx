import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import Splash from "../pages/Splash";
import SearchUserPage from "../pages/SearchUserPage";
import LoginPage from "../pages/LoginPage";
import JoinPage from "../pages/JoinPage";
import WithoutNav from "./WithoutNav";
import WithNav from "./WithNav";

import ProfilePage from "../pages/ProfilePage";
import ProfileModifyPage from "../pages/ProfileModifyPage";
import { useInfo } from "../hooks/useInfo";

const Router = () => {
    const { myinfo } = useInfo();
    useEffect(() => {
        myinfo();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<WithoutNav />}>
                    <Route path="/" element={<Splash />} />
                    <Route path="/loginpage" element={<LoginPage />} />
                    <Route path="/joinpage" element={<JoinPage />} />
                    <Route
                        path="/profileModify"
                        element={<ProfileModifyPage />}
                    />
                </Route>
                <Route element={<WithNav />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/search" element={<SearchUserPage />} />
                    <Route path="/myprofile" element={<ProfilePage />} />
                    <Route
                        path="/myprofile/:accountname"
                        element={<ProfilePage />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
