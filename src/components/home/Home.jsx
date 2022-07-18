import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import HomeHeader from "./HomeHeader";
import HomeMain from "./HomeMain";
import axios from "axios";
import { useAxios } from "../../hooks/useAxios";

const Home = () => {
    const navigate = useNavigate();
    const getFollowersPost = {
        url: `/post/feed`,
        method: "GET",
    };
    const { error, isPending, response, callRefetch } =
        useAxios(getFollowersPost);

    useEffect(() => {
        console.log(response, error);
    },[]);
    return (
        <>
            {/* 임시 버튼 */}
            <button onClick={() => navigate("/")}>뒤로가기</button>
            <HomeHeader />
            <div className="mainWrapper">
                <HomeMain />
            </div>
        </>
    );
};

export default Home;
