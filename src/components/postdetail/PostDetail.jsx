import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Post from "../home/Post";
import PostComment from "../comment/PostComment";
import TopNav from "../ui/TopNav";
import BackButton from "../ui/BackButton";
import ModalButton from "../ui/ModalButton";
import Modal from "../modal/Modal";
import AlertModal from "../modal/AlertModal";
import { MainWrap } from "../../styles/GlobalStyle";

const DetailWrap = styled.div`
    border-top: 0.5px solid #dbdbdb;
`;

function PostDetail() {
    const [post, setPost] = useState([]);
    const { post_id } = useParams();
    const [modal, setModal] = useState(false);
    const [alertModal, setAlertModal] = useState(false);

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
        onClick: () => {},
    };

    async function getPostDetail() {
        const token = localStorage.getItem("token");

        const res = await fetch(
            `https://mandarin.api.weniv.co.kr/post/${post_id}`,
            {
                method: "GET",

                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-type": "application/json",
                },
            }
        );

        const json = await res.json();
        console.log(json);

        const tempArr = [];
        tempArr.push(json.post);
        setPost(tempArr);
    }

    useEffect(() => {
        getPostDetail();
    }, []);

    return (
        <>
            <TopNav
                leftChild={<BackButton />}
                rightChild={<ModalButton onClick={() => setModal(!modal)} />}
            />
            <MainWrap>
                {post ? <Post datas={post} /> : null}
                <DetailWrap>
                    <PostComment post_id={post_id} />
                </DetailWrap>
            </MainWrap>

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
    );
}

export default PostDetail;
