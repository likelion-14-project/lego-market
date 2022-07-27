import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAxios } from "../../hooks/useAxios";
import AlertModal from "../modal/AlertModal";
import Modal from "../modal/Modal";
import LikeComment from "../post/LikeComment";
import SearchUserItem from "../search/SearchUserItem";
import ModalButton from "../ui/ModalButton";

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
    width: 8px;
    height: 8px;
    border-radius: 8px;
    bottom: 0;
    background-color: #fff;
`;
const ModalButtonWrap = styled.div`
    position: absolute;
    top: 4px;
    right: 0;
`;

const Post = ({ datas }) => {
    const [modal, setModal] = useState(false);
    const [alertModal, setAlertModal] = useState(false);
    const [selectedPostId, setSelectedPostId] = useState();
    const [prevPostData, setPrevPostData] = useState();
    const navigate = useNavigate();
    const imgRef = useRef([]);
    const { deletePost } = useAxios();

    const [alertButton, setAlertButton] = useState({});
    const [content, setContent] = useState();

    const modalMenuList = [
        {
            content: "삭제",
            onClick: () => {
                setContent("게시글을 삭제하시겠어요?");
                setAlertButton(deleteButton);
                setAlertModal(true);
            },
        },
        {
            content: "수정",
            onClick: () => {
                setContent("게시글을 수정하시겠어요?");
                setAlertButton(modifyButton);
                setAlertModal(true);
            },
        },
    ];
    const modifyButton = {
        content: "수정",
        onClick: () => {
            console.log("modify");
            navigate(`/post/${selectedPostId}/edit`, { state: prevPostData });
        },
    };
    const deleteButton = {
        content: "삭제",
        onClick: () => {
            console.log("delete");
            deletePost(selectedPostId);
            window.location.reload();
        },
    };
    return (
        <>
            {datas?.map((v, i) => {
                const PostImgSrc = v.image.split(",");
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
                        <ModalButtonWrap>
                            <ModalButton
                                onClick={() => {
                                    setModal(!modal);
                                    setSelectedPostId(v.id);
                                    setPrevPostData({
                                        post: {
                                            content: v.content,
                                            image: v.image,
                                        },
                                    });
                                }}
                            />
                        </ModalButtonWrap>
                        <PostSection>
                            <PostTxt>{v.content}</PostTxt>
                            <PostImgDiv>
                                <PostImgList
                                    id={i}
                                    ref={(el) => {
                                        imgRef.current[i] = el;
                                    }}
                                >
                                    {PostImgSrc &&
                                        PostImgSrc.map((v) => {
                                            if (v) {
                                                return (
                                                    <li key={i}>
                                                        <PostImg src={v} />
                                                    </li>
                                                );
                                            }
                                        })}
                                </PostImgList>
                                <SliderButtonWrap id={i}>
                                    {PostImgSrc.map((v, i) => {
                                        if (v) {
                                            return (
                                                <li>
                                                    <SliderButton id={i}></SliderButton>
                                                </li>
                                            );
                                        }
                                    })}
                                </SliderButtonWrap>
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
            <Modal modal={modal} setModal={setModal} modalMenuList={modalMenuList} />
            <AlertModal
                alertModal={alertModal}
                setAlertModal={setAlertModal}
                setModal={setModal}
                content={content}
                alertButton={alertButton}
            />
        </>
    );
};

export default Post;
