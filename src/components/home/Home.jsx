import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFeedPost } from "../../hooks/useAxios";
import HomeMain from "./HomeMain";
import Post from "../post/Post";
import TopNav from "../ui/topNav/TopNav";
import { HeaderStrong, HomeHeaderImg, MainContentsWrap } from "./Home.style";
import LoadingPage from "../../pages/LoadingPage";

const Home = () => {
    const [postData, setPostData] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const res = await getFeedPost();
            setPostData(res);
        })();
    }, []);

    if (postData === []) {
        return <HomeMain />;
    }
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
                {postData?.data.posts ? <Post datas={postData.data.posts} /> : <LoadingPage />}
            </MainContentsWrap>
        </>
    );
};

export default Home;
