import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LikeComment from "../post/LikeComment";
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
                            <LikeComment heartState={v.hearted} heartCount={v.heartCount} commentCount={v.commentCount} postId={v.id}/>
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
