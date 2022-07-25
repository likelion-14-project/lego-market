import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAxios } from "../../hooks/useAxios";

const LikeCommentDiv = styled.div`
    display: flex;
    margin-bottom: 16px;
`;
const LIkeCommentIcon = styled.img`
    display: block;
    width: 20px;
    height: 20px;
    margin-right: 6px;
    margin-top: 1px;
    cursor: pointer;
`;
const LikeButton = styled.button`
    display: flex;
    margin-right: 18px;
    background-color: inherit;
    padding: 0;
`;
const LikeCommentCounter = styled.span`
    font-weight: 400;
    font-size: 17px;
    line-height: 22px;
`;

const LinkToPost = styled(Link)`
    display: flex;
    margin-right: 18px;
    background-color: inherit;
    padding: 0;
`;

const LikeComment = ({ postId }) => {
    const [_heartState, setHeartState] = useState();
    const [_heartCount, setHeartCount] = useState();
    const [_commentCount, setCommentCount] = useState();
    
    const { addLikeCall, cancelLikeCall, getPostInfo } = useAxios();

    async function controlHeart() {
        if (_heartState) {
            const res = await cancelLikeCall(postId);
            console.log("controlHeart -  true");
            setHeartState(res?.post.hearted);
        } else {
            console.log("controlHeart -  false");
            const res = await addLikeCall(postId);
            setHeartState(res.post.hearted);
        }
    }

    useEffect(() => {
        console.log(_heartState);
        async function initHeart() {
            const res = await getPostInfo(postId);
            setHeartState(res.post.hearted);
            setHeartCount(res.post.heartCount);
            setCommentCount(res.post.commentCount);
        }
        initHeart();
    }, [_heartState, postId, getPostInfo]);
    return (
        <LikeCommentDiv>
            <LikeButton>
                {
                    <LIkeCommentIcon
                        src={
                            _heartState
                                ? process.env.PUBLIC_URL + "/icons/icon-heart-active.png"
                                : process.env.PUBLIC_URL + "/icons/icon-heart.png"
                        }
                        onClick={controlHeart}
                    />
                }
                <LikeCommentCounter>{_heartCount}</LikeCommentCounter>
            </LikeButton>
            <LinkToPost to={`/postdetail/${postId}`}>
                <LIkeCommentIcon src={process.env.PUBLIC_URL + "/icons/icon-message-circle.png"} />
                <LikeCommentCounter>{_commentCount}</LikeCommentCounter>
            </LinkToPost>
        </LikeCommentDiv>
    );
};

export default LikeComment;
