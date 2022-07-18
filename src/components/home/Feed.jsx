import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchUserItem from "../search/SearchUserItem";

const FeedArticle = styled.article`
    position: relative;
    max-width: 358px;
    width: 100%;
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
  transition: all .4s;
`
const PostImg = styled.img`
  min-width: 304px;
  width:100%;
  min-height:228px;
`

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

const Feed = ({ postDatas }) => {
  const [imgNum, setImgNum] = useState('0');
    useEffect(() => {
        console.log(postDatas);
    }, [postDatas]);

    return (
        <>
            {postDatas.map((v, i) => {
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
                            <PostImgDiv>
                                <PostImgList>
                                  <li><PostImg src={v.image}/></li>
                                </PostImgList>
                              </PostImgDiv>
                            <LikeCommentDiv>
                                <LikeButton>
                                    <LIkeCommentIcon
                                        src={
                                            process.env.PUBLIC_URL +
                                            "./icons/icon-heart.png"
                                        }
                                    />
                                    <LikeCommentCounter>4</LikeCommentCounter>
                                </LikeButton>
                                <LinkToPost to={`/postdetail/${v.id}`}>
                                    <LIkeCommentIcon
                                        src={
                                            process.env.PUBLIC_URL +
                                            "./icons/icon-message-circle.png"
                                        }
                                    />
                                    <LikeCommentCounter>4</LikeCommentCounter>
                                </LinkToPost>
                            </LikeCommentDiv>
                        </PostSection>
                    </FeedArticle>
                );
            })}
        </>
    );
};

export default Feed;
