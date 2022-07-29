import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useInfo } from "../hooks/useInfo";
import Home from "../components/home/Home";
import Splash from "../pages/Splash";
import SearchUserPage from "../pages/SearchUserPage";
import LoginPage from "../pages/LoginPage";
import JoinPage from "../pages/JoinPage";
import WithNav from "./WithNav";

import ProfilePage from "../pages/ProfilePage";
import ProfileModifyPage from "../pages/ProfileModifyPage";
import PostUploadPage from "../pages/PostUploadPage";
import ChatPage from "../pages/ChatPage";
import Chat from "../components/chat/Chat";
import NotFoundPage from "../pages/NotFoundPage";
import FollowPage from "../pages/FollowPage";
import AddProductListPage from "../pages/AddProductPage";
import ProductListPage from "../pages/ProductListPage";
import PostDetailPage from "../pages/PostDetailPage";
import PostModify from "../components/postModify/PostModify";

const Router = () => {
    const token = localStorage.getItem("token");
    const { myinfo } = useInfo();
    const [valid, setValid] = useState(false);

    const tokenValid = async () => {
        if (token) {
            try {
                const url = "https://mandarin.api.weniv.co.kr/user/checktoken";
                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-type": "application/json",
                    },
                });
                const json = await response.json();

                if (json.isValid === true) {
                    setValid(true);
                } else {
                    setValid(false);
                    throw Error("유효하지 않은 토큰입니다.");
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    useEffect(() => {
        if (token) {
            tokenValid();
            if (valid === false) {
                return;
            } else {
                myinfo();
            }
        }
    }, [token, valid]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Splash tokenState={valid} />} />
                <Route path="/loginpage" element={<LoginPage />} />
                <Route path="/joinpage" element={<JoinPage />} />
                {valid || (
                    <>
                        <></>
                    </>
                )}
                {valid && (
                    <>
                        <Route
                            path="/profileModify"
                            element={<ProfileModifyPage />}
                        />
                        <Route path="/editpost" element={<PostUploadPage />} />
                        <Route
                            path="/post/:postid/edit"
                            element={<PostModify />}
                        />
                        <Route
                            path="/postdetail/:post_id"
                            element={<PostDetailPage />}
                        />
                        <Route element={<WithNav />}>
                            <Route path="/home" element={<Home />} />
                            <Route
                                path="/search"
                                element={<SearchUserPage />}
                            />
                            <Route
                                path="/myprofile"
                                element={<ProfilePage />}
                            />
                            <Route
                                path="/myprofile/:accountname"
                                element={<ProfilePage />}
                            />
                            <Route
                                path="/follow/:accountname/:type"
                                element={<FollowPage />}
                            />
                            <Route
                                path="/editpost"
                                element={<PostUploadPage />}
                            />
                            <Route path="/chat/list" element={<ChatPage />} />
                            <Route path="/chat/:id" element={<Chat />} />
                            <Route
                                path="/productlist"
                                element={<ProductListPage />}
                            />
                            <Route
                                path="/product"
                                element={<AddProductListPage />}
                            />
                        </Route>
                        <Route path="*" element={<NotFoundPage />} />
                        <Route path="/notfound" element={<NotFoundPage />} />
                    </>
                )}
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
