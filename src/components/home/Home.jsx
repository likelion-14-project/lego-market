import React from "react";
import HomeMain from "./HomeMain";
import { useAxios } from "../../hooks/useAxios";
import Post from "./Post";
import { MainContentsWrap } from "../../styles/GlobalStyle";
import TopNav from "../ui/TopNav";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HeaderStrong = styled.strong`
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    flex: 1;
`;
const HomeHeaderImg = styled.img`
    width: 24px;
    height: 24px;
`;
const Home = () => {
    const navigate = useNavigate();
    const getFollowersPost = {
        url: `/post/feed`,
        method: "GET",
    };
    const { isPending, response } = useAxios(getFollowersPost);

    return (
        <>
            <TopNav
                leftChild={<HeaderStrong>레고마켓피드</HeaderStrong>}
                rightChild={
                    <HomeHeaderImg
                        src={process.env.PUBLIC_URL + "/icons/icon-search.png"}
                        alt="피드찾기"
                        onClick={() => navigate("/search")}
                    />
                }
            />

            <MainContentsWrap>
                {response?.data.posts ? <Post datas={response.data.posts} /> : <HomeMain />}
            </MainContentsWrap>
        </>
    );
};

export default Home;
