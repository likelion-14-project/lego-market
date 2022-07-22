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
<<<<<<< HEAD
import { checkToken } from "../utils/CheckToken";

=======
import AddProductListPage from "../pages/AddProductPage"
import ProductListPage from "../pages/ProductListPage";
>>>>>>> JJaemo
const Router = () => {
    const { myinfo } = useInfo();
    useEffect(() => {
        myinfo();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
<<<<<<< HEAD
                <Route path="/" element={<Splash />} />
                <Route path="/loginpage" element={<LoginPage />} />

                {checkToken() || (
                    <>
                        <Route path="/joinpage" element={<JoinPage />} />
                    </>
                )}
                {checkToken() && (
                    <>
                        <Route path="/profileModify" element={<ProfileModifyPage />} />
                        <Route path="/editpost" element={<PostUploadPage />} />
                        <Route element={<WithNav />}>
                            <Route path="/home" element={<Home />} />
                            <Route path="/search" element={<SearchUserPage />} />
                            <Route path="/myprofile" element={<ProfilePage />} />
                            <Route path="/myprofile/:accountname" element={<ProfilePage />} />
                            <Route path="/editpost" element={<PostUploadPage />} />
                            <Route path="/chat" element={<ChatPage />} />
                        </Route>
                    </>
                )}

=======
                <Route element={<WithoutNav />}>
                    <Route path="/" element={<Splash />} />
                    <Route path="/loginpage" element={<LoginPage />} />
                    <Route path="/joinpage" element={<JoinPage />} />
                    <Route
                        path="/profileModify"
                        element={<ProfileModifyPage />}
                    />
                    <Route path="/editpost" element={<PostUploadPage />} />
                    <Route path="/product" element={<AddProductListPage/>}/>
                    <Route path="/productlist" element={<ProductListPage/>}/>
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
>>>>>>> JJaemo
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
