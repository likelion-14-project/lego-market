import React, { useEffect, useState } from "react";
import { addLikeCall, cancelLikeCall, getPostInfo } from "../../../hooks/useAxios";
import {
    LikeCommentDiv,
    LikeButton,
    LIkeCommentIcon,
    LikeCommentCounter,
    LinkToPost,
} from "./LikeComment.style";

const LikeComment = ({ postId }) => {
    const [_heartState, setHeartState] = useState();
    const [_heartCount, setHeartCount] = useState();
    const [_commentCount, setCommentCount] = useState();

    async function controlHeart() {
        if (_heartState) {
            const res = await cancelLikeCall(postId);
            setHeartState(res.post.hearted);
        } else {
            const res = await addLikeCall(postId);
            setHeartState(res.post.hearted);
        }
    }

    useEffect(() => {
        async function initHeart() {
            const res = await getPostInfo(postId);
            setHeartState(res?.post.hearted);
            setHeartCount(res?.post.heartCount);
            setCommentCount(res?.post.commentCount);
        }
        initHeart();
    }, [postId, _heartState]);
    return (
        <LikeCommentDiv>
            <LikeButton aria-label="좋아요버튼">
                {
                    <LIkeCommentIcon
                        src={
                            _heartState
                                ? process.env.PUBLIC_URL + "/icons/icon-heart-active.png"
                                : process.env.PUBLIC_URL + "/icons/icon-heart.png"
                        }
                        onClick={controlHeart}
                        alt={_heartState ? "좋아요취소" : "좋아요"}
                        // 이미지가 안보일 때 꽉찬하트일 때 누르면 좋아요가 취소되니 좋아요취소 라고 표기하는게 맞는거 같아서 이렇게 했습니다.
                    />
                }
                <LikeCommentCounter>{_heartCount}</LikeCommentCounter>
            </LikeButton>
            <LinkToPost to={`/postdetail/${postId}`}>
                <LIkeCommentIcon src={process.env.PUBLIC_URL + "/icons/icon-message-circle.png"} alt="덧글로 이동"/>
                <LikeCommentCounter>{_commentCount}</LikeCommentCounter>
            </LinkToPost>
        </LikeCommentDiv>
    );
};

export default LikeComment;
