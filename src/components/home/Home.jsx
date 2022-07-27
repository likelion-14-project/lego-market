import React, { useEffect, useState } from "react";
import HomeMain from "./HomeMain";
import Post from "./Post";
import { MainContentsWrap } from "../../styles/GlobalStyle";
import TopNav from "../ui/TopNav";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {getFeedPost} from "../../hooks/useAxios"
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
    const [postData, setPostData] = useState();
    const navigate = useNavigate();
    
    useEffect(() => {
        (async()=>{
            const res = await getFeedPost();
            setPostData(res);
        })();
    }, []);

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
                {postData?.data.posts ? <Post datas={postData.data.posts} /> : <HomeMain />}
            </MainContentsWrap>
        </>
    );
};

export default Home;
