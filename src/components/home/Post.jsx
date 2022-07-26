import React, { useEffect, useRef, useState } from "react";
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

const SliderButtonWrap = styled.ul`
    position: absolute;
    display: flex;
    gap: 20px;
    left: 50%;
    bottom: 16px;
    transform: translateX(-50%);
`;
const SliderButton = styled.button`
    position: absolute;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    bottom: 0;
    background-color: #fff;
`;

const Post = ({ datas }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const imgRef = useRef(null);
    const buttonRef = useRef();
    useEffect(() => {
        console.log(datas);
    }, [datas]);

    useEffect(() => {
        console.log("currentSlide log");
        imgRef.current.style.transition = `all 0,4s ease-in-out`;
        imgRef.current.style.transition = `translateX(-${currentSlide}00%)`;
    }, [currentSlide]);

    const buttonClicked = () => {
        console.log("buttonClicked");
        console.log(buttonRef.current.id);
        setCurrentSlide(buttonRef.current.id);
    };

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
                            <PostImgDiv ref={imgRef}>
                                <PostImgList>
                                    {PostImgSrc[i] &&
                                        PostImgSrc.map((v) => {
                                            console.log(v);
                                            return (
                                                <>
                                                    <li key={i}>
                                                        <PostImg src={v} />
                                                    </li>
                                                </>
                                            );
                                        })}
                                    <SliderButtonWrap>
                                        {PostImgSrc.map((v, i) => {
                                            return (
                                                <li>
                                                    <SliderButton
                                                        id={i}
                                                        onClick={buttonClicked}
                                                        ref={buttonRef}
                                                    ></SliderButton>
                                                </li>
                                            );
                                        })}
                                    </SliderButtonWrap>
                                </PostImgList>
                            </PostImgDiv>
                            <LikeComment
                                heartState={v.hearted}
                                heartCount={v.heartCount}
                                commentCount={v.commentCount}
                                postId={v.id}
                            />
                            <PostDate>
                                {v.createdAt.slice(0, 10).replace("-", "년 ").replace("-", "월 ") +
                                    "일 "}
                            </PostDate>
                        </PostSection>
                    </FeedArticle>
                );
            })}
        </>
    );
};

export default Post;
