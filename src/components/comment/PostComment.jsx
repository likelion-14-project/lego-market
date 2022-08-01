import React, { useEffect, useRef, useState } from "react";
import CommentCard from "./CommentCard";
import { CommentSection } from "./Comment.style";
import { useParams } from "react-router-dom";
import useInfinite from "../../hooks/useInfinite";

function PostComment(props) {
    const { post_id } = useParams();
    const [skipNum, setSkipNum] = useState(0);
    const { list, hasMore, isLoading } = useInfinite(
        skipNum,
        post_id,
        "comments"
    );
    const observerRef = useRef();

    const observer = (node) => {
        if (isLoading) return;
        if (observerRef.current) observerRef.current.disconnect();

        observerRef.current = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && hasMore) {
                setSkipNum((prev) => prev + 10);
            }
        });

        node && observerRef.current.observe(node);
    };

    useEffect(() => {
        console.log("list : ", list);
    }, [list]);

    return (
        <>
            <CommentSection>
                <h2 className="visually_hidden">댓글 목록</h2>
                <ul>
                    {list
                        .map((commentsArr) => {
                            return (
                                <CommentCard
                                    // key={commentsArr.id}
                                    // accountname={commentsArr.author.accountname}
                                    userProfile={commentsArr.author.image}
                                    userName={commentsArr.author.username}
                                    userCommet={commentsArr.content}
                                    createdAt={commentsArr.createdAt}
                                    comment_id={commentsArr.id}
                                    remove={props.remove}
                                    commentAuthor={
                                        commentsArr.author.accountname
                                    }
                                />
                            );
                        })
                        .reverse()}
                    <div ref={observer} />
                    <>{isLoading && <div>로딩중~!</div>}</>
                </ul>
            </CommentSection>
        </>
    );
}

export default PostComment;
