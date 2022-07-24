import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";
import InputFooter from "../ui/InputFooter";
import CommentCard from "./CommentCard";
import { useAuthContext } from "../../hooks/useAuthContext";

const CommentSection = styled.section`
    max-width: 390px;
    padding: 20px 16px 0;
    margin: 0 auto;
    // 임시로 많아지면 스크롤로 내려서 보게끔 했습니다.
    /* margin: 300px auto 0;
    overflow-y: scroll;
    height: 350px; */
`;

function PostComment({ post_id }) {
    const { user } = useAuthContext();
    // 사용자가 입력하고 있는 댓글
    let [comment, setComment] = useState("");
    // 댓글리스트를 담기
    let [feedComments, setFeedComments] = useState([]);
    const [disabled, setDisabled] = useState(true);

    // 게시 클릭시 할생하는 post 함수
    let post = (e) => {
        createComment(comment);
        setComment("");
    };

    async function createComment(comment) {
        const token = localStorage.getItem("token");

        const reqData = {
            comment: {
                content: comment,
            },
        };

        const res = await fetch(
            `https://mandarin.api.weniv.co.kr/post/${post_id}/comments/`,
            {
                method: "POST",

                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-type": "application/json",
                },
                body: JSON.stringify(reqData),
            }
        );

        const json = await res.json();
        console.log(json);
        getComments();
    }

    async function getComments() {
        const token = localStorage.getItem("token");

        const res = await fetch(
            `https://mandarin.api.weniv.co.kr/post/${post_id}/comments/`,
            {
                method: "GET",

                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-type": "application/json",
                },
            }
        );

        const json = await res.json();
        console.log(json.comments);
        setFeedComments(json.comments);
        return json;
    }

    useEffect(() => {
        getComments();
    }, []);

    return (
        <>
            <CommentSection>
                <ul>
                    {feedComments
                        .map((commentsArr, i) => {
                            return (
                                <CommentCard
                                    userProfile={commentsArr.author.image}
                                    userName={commentsArr.author.username}
                                    userCommet={commentsArr.content}
                                    createdAt={commentsArr.createdAt}
                                    key={i}
                                />
                            );
                        })
                        .reverse()}
                </ul>
            </CommentSection>
            <InputFooter
                img={user.image}
                ir="댓글입력하기"
                placeholder="댓글 입력하기"
                value={comment}
                onChange={(e) => {
                    setComment(e.target.value);
                    e.target.value.length > 0
                        ? setDisabled(false)
                        : setDisabled(true);
                }}
                onClick={post}
                disabled={disabled}
                btnTxt="게시"
            />
        </>
    );
}

export default PostComment;
