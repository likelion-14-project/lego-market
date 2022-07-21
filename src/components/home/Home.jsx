import React from "react";
import HomeHeader from "./HomeHeader";
import HomeMain from "./HomeMain";
import { useAxios } from "../../hooks/useAxios";
import Feed from "./Post";
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
                {response?.data.posts ? <Feed datas={response.data.posts} /> : <HomeMain />}
            </MainWrap>
        </>
    );
};

export default Home;
