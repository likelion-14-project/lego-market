import React from "react";
import HomeHeader from "./HomeHeader";
import HomeMain from "./HomeMain";
import { useAxios } from "../../hooks/useAxios";
import Post from "./Post";
import { MainWrap } from "../../styles/GlobalStyle";

const Home = () => {
    const getFollowersPost = {
        url: `/post/feed`,
        method: "GET",
    };
    const { isPending, response } = useAxios(getFollowersPost);

    return (
        <>
            <HomeHeader />
            <MainWrap>
                {response?.data.posts ? <Post datas={response.data.posts} /> : <HomeMain />}
            </MainWrap>
        </>
    );
};

export default Home;
