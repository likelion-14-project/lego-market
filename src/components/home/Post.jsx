import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchUserItem from "../search/SearchUserItem";

const FeedArticle = styled.article`
    position: relative;
    max-width: 358px;
    width: 100%;
    margin: 0px auto 20px;
`;
const AuthorSection = styled.section`
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    cursor: pointer;
`;
const PostSection = styled.section`
    padding-left: 54px;
`;
const PostTxt = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 16px;
    word-break: break-all;
`;
const PostImgDiv = styled.div`
    position: relative;
    margin-bottom: 16px;
    max-height: 228px;
    border-radius: 10px;
    overflow: hidden;
    /* 슬라이드 형식으로 구현 염두 */
`;
const PostImgList = styled.ul`
    display: flex;
    transition: all 0.4s;
`;
const PostImg = styled.img`
    min-width: 304px;
    width: 100%;
    height: 100%;
    max-height: 228px;
    min-height: 228px;
    overflow: hidden;
    object-fit: cover;
`;

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

const PostDate = styled.strong`
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    color: #767676;
`;

const Post = ({ datas }) => {
    const [imgNum, setImgNum] = useState("0");
    // 이미지가 여러개일 경우 추가하려고 작성(미완성)
    useEffect(() => {
        console.log(datas);
    }, [datas]);

    return (
        <>
            {datas?.map((v, i) => {
                const PostImgSrc = v.image.split(",");
                console.log(PostImgSrc);
                return (
                    <FeedArticle>
                        <AuthorSection>
                            <SearchUserItem
                                profileImg={v.author.image}
                                userName={v.author.username}
                                userId={v.author.accountname}
                                imgSize="small"
                            />
                        </AuthorSection>
                        <PostSection>
                            <PostTxt>{v.content}</PostTxt>
                            {PostImgSrc[imgNum] && (
                                <PostImgDiv>
                                    <PostImgList>
                                        <li key={i}>
                                            <PostImg src={PostImgSrc[imgNum]} />
                                        </li>
                                    </PostImgList>
                                </PostImgDiv>
                            )}
                            <LikeCommentDiv>
                                <LikeButton>
                                    <LIkeCommentIcon
                                        src={
                                            process.env.PUBLIC_URL +
                                            "/icons/icon-heart.png"
                                        }
                                    />
                                    <LikeCommentCounter>
                                        {v.heartCount}
                                    </LikeCommentCounter>
                                </LikeButton>
                                <LinkToPost to={`/postdetail/${v.id}`}>
                                    <LIkeCommentIcon
                                        src={
                                            process.env.PUBLIC_URL +
                                            "/icons/icon-message-circle.png"
                                        }
                                    />
                                    <LikeCommentCounter>
                                        {v.commentCount}
                                    </LikeCommentCounter>
                                </LinkToPost>
                            </LikeCommentDiv>
                            <PostDate>
                                {v.createdAt
                                    .slice(0, 10)
                                    .replace("-", "년 ")
                                    .replace("-", "월 ") + "일 "}
                            </PostDate>
                        </PostSection>
                    </FeedArticle>
                );
            })}
        </>
    );
};

export default Post;
