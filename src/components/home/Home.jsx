import React from "react";
import { useNavigate } from "react-router-dom";
import HomeHeader from "./HomeHeader";
import HomeMain from "./HomeMain";
import { useAxios } from "../../hooks/useAxios";
import Feed from "./Post";
import { MainWrap } from "../../styles/GlobalStyle";

const Home = () => {
    const navigate = useNavigate();
    const getFollowersPost = {
        url: `/post/feed`,
        method: "GET",
    };
    const { error, isPending, response, callRefetch } =
        useAxios(getFollowersPost);

    return (
        <>
            <HomeHeader />
            <MainWrap>
                {/* 임시 버튼 */}
                <button onClick={() => navigate("/")}>뒤로가기</button>
                {response?.data.posts ? (
                    <Feed datas={response.data.posts} />
                ) : (
                    // 애초에 데이터를 전달해줄때 response 에서 author 값을 따로 필터해서 주는게 맞을듯
                    <HomeMain />
                )}
            </MainWrap>
        </>
    );
};

export default Home;
