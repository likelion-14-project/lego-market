import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    ChatListMain,
    ChatListUl,
    ChatListli,
    UserLink,
    ListWrap,
    UserName,
    UserMessage,
    ChatDate,
} from "./ChatList.style";

import TopNav from "../ui/topNav/TopNav";
import BackButton from "../ui/backButton/BackButton";
import ModalButton from "../ui/modalButton/ModalButton";
import Modal from "../modal/modal/Modal";
import AlertModal from "../modal/alertModal/AlertModal";
import dataChat from "./dataChat";

function ChatList() {
    const [modal, setModal] = useState(false);
    const [alertModal, setAlertModal] = useState(false);

    const navigate = useNavigate();

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
    return (
        <>
            <TopNav
                leftChild={<BackButton />}
                rightChild={<ModalButton onClick={() => setModal(!modal)} />}
            />
            <ChatListMain>
                <ChatListUl>
                    {dataChat.chatData.map((chatArr, i) => {
                        return (
                            <ChatListli key={i}>
                                <UserLink to='#none'>
                                    <img
                                        src={
                                            process.env.PUBLIC_URL +
                                            chatArr.image
                                        }
                                    />
                                </UserLink>
                                <Link to={`/chat/${chatArr.id}`}>
                                    <ListWrap>
                                        <UserName>{chatArr.userName}</UserName>
                                        <UserMessage>
                                            {chatArr.message}
                                        </UserMessage>
                                    </ListWrap>
                                    <ChatDate>{chatArr.date}</ChatDate>
                                </Link>
                            </ChatListli>
                        );
                    })}
                </ChatListUl>
            </ChatListMain>
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

export default ChatList;
