import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CommentCard from "./CommentCard";

const CommentSection = styled.section`
    max-width: 390px;
    padding: 20px 16px 0;
    margin: 0 auto;
`;

function PostComment(props) {
    return (
        <>
            <CommentSection>
                <h2 className="visually_hidden">댓글 목록</h2>
                <ul>
                    {props.feedComments
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
        </>
    );
}

export default PostComment;
