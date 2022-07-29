import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFeedPost } from "../../hooks/useAxios";
import HomeMain from "./HomeMain";
import Post from "../post/Post";
import TopNav from "../ui/TopNav";
import { HeaderStrong, HomeHeaderImg, MainContentsWrap } from "./Home.style";

const Home = () => {
    const [postData, setPostData] = useState();
    const [refetch, setRefetch] = useState(0);
    const navigate = useNavigate();

    function reqRefetch(data) {
        setRefetch(data);
    }

    useEffect(() => {
        console.log(reqRefetch);
        (async () => {
            const res = await getFeedPost();
            setPostData(res);
        })();
    }, [refetch]);

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
                {postData?.data.posts ? (
                    <Post datas={postData.data.posts} reqRefetch={reqRefetch} />
                ) : (
                    <HomeMain />
                )}
            </MainContentsWrap>
        </>
    );
};

export default Home;
