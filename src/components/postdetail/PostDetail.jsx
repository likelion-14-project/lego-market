import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDelete } from "../../hooks/useDelete";
import { useAuthContext } from "../../hooks/useAuthContext";
import { DetailMain, DetailWrap } from "./PostDetail.style";

import Post from "../post/Post";
import PostComment from "../comment/PostComment";
import TopNav from "../ui/topNav/TopNav";
import BackButton from "../ui/backButton/BackButton";
import ModalButton from "../ui/modalButton/ModalButton";
import Modal from "../modal/modal/Modal";
import AlertModal from "../modal/alertModal/AlertModal";
import InputFooter from "../ui/inputfooter/InputFooter";

function PostDetail() {
    // 사용자가 입력하고 있는 댓글
    let [comment, setComment] = useState("");
    // 댓글리스트를 담기
    let [feedComments, setFeedComments] = useState([]);

    const [post, setPost] = useState([]);

    const [disabled, setDisabled] = useState(true);
    const [modal, setModal] = useState(false);
    const [alertModal, setAlertModal] = useState(false);

    const { user } = useAuthContext();
    const { post_id } = useParams();
    const navigate = useNavigate();
    const { remove, isUpdate } = useDelete();
    const url = "https://mandarin.api.weniv.co.kr";

    // 게시 클릭시 댓글 올라가는 함수
    let addComment = (e) => {
        createComment(comment);
        setComment("");
    };

    // 엔터 입력시 댓글 올라가는 함수
    let handleKeyPress = (e) => {
        if (e.key === "Enter") {
            addComment();
        }
    };

    const modalMenuList = [
        {
            content: "설정 및 개인정보",
            onClick: () => {},
        },
        {
            content: "로그아웃",
            onClick: () => {
                setAlertModal(true);
            },
        },
    ];
    const alertButton = {
        content: "로그아웃",
        onClick: () => {
            localStorage.removeItem("token");
            navigate("/");
            window.location.reload();
        },
    };

    // 댓글 작성
    async function createComment(comment) {
        const token = localStorage.getItem("token");

        const reqData = {
            comment: {
                content: comment,
            },
        };
        try {
            const res = await fetch(`${url}/post/${post_id}/comments/`, {
                method: "POST",

                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-type": "application/json",
                },
                body: JSON.stringify(reqData),
            });
            const json = await res.json();
            getComments();
        } catch (error) {
            console.error(error);
        }
    }

    // 댓글 리스트
    async function getComments() {
        const token = localStorage.getItem("token");

        try {
            const res = await fetch(`${url}/post/${post_id}/comments/`, {
                method: "GET",

                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-type": "application/json",
                },
            });
            const json = await res.json();
            setFeedComments(json.comments);
            return json;
        } catch (error) {
            console.error(error);
        }
    }

    // 게시글 상세
    async function getPostDetail() {
        const token = localStorage.getItem("token");

        try {
            const res = await fetch(`${url}/post/${post_id}`, {
                method: "GET",

                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-type": "application/json",
                },
            });

            const json = await res.json();
            const tempArr = [];
            tempArr.push(json.post);
            setPost(tempArr);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getPostDetail();
        getComments();
    }, []);

    useEffect(() => {
        getPostDetail();
        getComments();
    }, [isUpdate]);

    return (
        <>
            {user && (
                <>
                    <TopNav
                        leftChild={<BackButton />}
                        rightChild={
                            <ModalButton onClick={() => setModal(!modal)} />
                        }
                    />
                    <DetailMain>
                        <DetailWrap>
                            {post ? <Post datas={post} /> : null}
                        </DetailWrap>
                        <PostComment
                            feedComments={feedComments}
                            remove={remove}
                        />
                    </DetailMain>
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
                        onClick={addComment}
                        onKeyPress={handleKeyPress}
                        disabled={disabled}
                        btnTxt="게시"
                    />
                    <Modal
                        modal={modal}
                        setModal={setModal}
                        modalMenuList={modalMenuList}
                    />
                    <AlertModal
                        alertModal={alertModal}
                        setAlertModal={setAlertModal}
                        setModal={setModal}
                        content={"로그아웃하시겠어요?"}
                        alertButton={alertButton}
                    />
                </>
            )}
        </>
    );
}

export default PostDetail;
