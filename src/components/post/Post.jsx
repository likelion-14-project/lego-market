import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deletePost } from "../../hooks/useAxios";
import AlertModal from "../modal/alertModal/AlertModal";
import Modal from "../modal/modal/Modal";
import LikeComment from "./likeComment/LikeComment";
import SearchUserItem from "../search/SearchUserItem";
import ModalButton from "../ui/modalButton/ModalButton";
import { useAuthContext } from "../../hooks/useAuthContext";
import {
    FeedArticle,
    AuthorSection,
    PostSection,
    PostTxt,
    PostImgDiv,
    PostImgList,
    PostImg,
    PostDate,
    SliderButton,
    SliderButtonWrap,
    ModalButtonWrap,
} from "./Post.style";

const Post = ({ datas, reqRefetch }) => {
    const [modal, setModal] = useState(false);
    const [alertModal, setAlertModal] = useState(false);
    const [alertButton, setAlertButton] = useState({});
    const [selectedPostId, setSelectedPostId] = useState();
    const [prevPostData, setPrevPostData] = useState();
    const navigate = useNavigate();
    const imgRef = useRef([]);
    const [content, setContent] = useState();
    const [author, setAuthor] = useState();
    const { user } = useAuthContext();

    let modalMenuList;
    author === user?.accountname
        ? (modalMenuList = [
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
          ])
        : (modalMenuList = [
              {
                  content: "신고",
                  onClick: () => {
                      // 신고할 함수를 작성해주세요
                  },
              },
          ]);

    const getRefetch = () => {
        reqRefetch(Date.now());
    };
    const modifyButton = {
        content: "수정",
        onClick: () => {
            navigate(`/post/${selectedPostId}/edit`, { state: prevPostData });
        },
    };
    const deleteButton = {
        content: "삭제",
        onClick: () => {
            deletePost(selectedPostId).then((res) => {
                if (res) {
                    console.log(res.data.message);
                    getRefetch();
                }
            });
            setModal(false);
            setAlertModal(false);
        },
    };
    return (
        <>
            {datas?.map((v, i) => {
                const postImgSrc = v.image.split(",").filter((v) => v);
                return (
                    <FeedArticle key={v.id}>
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
                                    setAuthor(v.author.accountname);
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
                                    {postImgSrc.map((v, i) => {
                                        return (
                                            <li key={v}>
                                                <PostImg
                                                    src={v}
                                                    alt={v.split(/^(https?)\/\//)}
                                                    loading="lazy"
                                                />
                                            </li>
                                        );
                                    })}
                                </PostImgList>
                                <SliderButtonWrap>
                                    {postImgSrc.map((v, i) => {
                                        return (
                                            <li key={v}>
                                                <SliderButton aria-label="이미지이동버튼"></SliderButton>
                                            </li>
                                        );
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

export default React.memo(Post);
