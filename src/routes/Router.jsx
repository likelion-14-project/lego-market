import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../components/home/Home";
import Splash from "../pages/Splash";
import SearchUserPage from "../pages/SearchUserPage";
import LoginPage from "../pages/LoginPage";
import JoinPage from "../pages/JoinPage";
import WithNav from "./WithNav";

import ProfilePage from "../pages/ProfilePage";
import ProfileModifyPage from "../pages/ProfileModifyPage";
import { useInfo } from "../hooks/useInfo";
import PostUploadPage from "../pages/PostUploadPage";
import ChatPage from "../pages/ChatPage";
import NotFoundPage from "../pages/NotFoundPage";
import { checkToken } from "../utils/CheckToken";

const Router = () => {
    const { myinfo } = useInfo();
    useEffect(() => {
        myinfo();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Splash />} />
                <Route path='/loginpage' element={<LoginPage />} />

                {checkToken() || (
                    <>
                        <Route path='/joinpage' element={<JoinPage />} />
                        <Route
                            path='/profileModify'
                            element={<ProfileModifyPage />}
                        />
                    </>
                )}
                {checkToken() && (
                    <>
                        <Route path='/editpost' element={<PostUploadPage />} />
                        <Route element={<WithNav />}>
                            <Route path='/home' element={<Home />} />
                            <Route
                                path='/search'
                                element={<SearchUserPage />}
                            />
                            <Route
                                path='/myprofile'
                                element={<ProfilePage />}
                            />
                            <Route
                                path='/myprofile/:accountname'
                                element={<ProfilePage />}
                            />
                            <Route
                                path='/editpost'
                                element={<PostUploadPage />}
                            />
                            <Route path='/chat' element={<ChatPage />} />
                        </Route>
                    </>
                )}

                <Route path='*' element={<NotFoundPage />} />
                <Route path='/notfound' element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
