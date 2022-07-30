import React from "react";
import CommentCard from "./CommentCard";
import { CommentSection } from "./Comment.style";

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
                                    key={i}
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
                </ul>
            </CommentSection>
        </>
    );
}

export default PostComment;
