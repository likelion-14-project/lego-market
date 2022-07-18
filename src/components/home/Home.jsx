import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import HomeHeader from "./HomeHeader";
import HomeMain from "./HomeMain";
import axios from "axios";

const Home = () => {
    const navigate = useNavigate();
    // const url = "https://mandarin.api.weniv.co.kr";
    const url = "http://146.56.183.55:5050";
    const reqPath = "/post/feed";
    const headers = {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        "Content-type": "application/json",
    };
    console.log(url + reqPath, headers);

    useEffect(() => {
        (async () => {
            const res = await axios.get(url + reqPath, { headers });
            console.log(res);
        })();
    });
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
