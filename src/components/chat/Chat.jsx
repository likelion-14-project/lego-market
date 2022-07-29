import React, { useState } from "react";
import {
    Main,
    ChatRoomUl,
    ChatSenderLi,
    ChatSenderTxt,
    ChatMeLi,
    ChatMeLiTxt,
    ChatRoomTime,
} from "./Chat.style";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate, useParams } from "react-router-dom";

import TopNav from "../ui/TopNav";
import BackButton from "../ui/BackButton";
import ModalButton from "../ui/ModalButton";
import Modal from "../modal/Modal";
import AlertModal from "../modal/AlertModal";
import InputFooter from "../ui/InputFooter";
import dataChat from "./dataChat";

function Chat() {
    const [chat, setChat] = useState("");
    const [chatlist, setChatList] = useState([]);
    const { user } = useAuthContext();

    const [disabled, setDisabled] = useState(true);
    const [modal, setModal] = useState(false);
    const [alertModal, setAlertModal] = useState(false);

    const navigate = useNavigate();
    const { id } = useParams();

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
        },
    };

    let sendChat = (e) => {
        const copyChatlist = [...chatlist];
        copyChatlist.push(chat);
        setChatList(copyChatlist);
        setChat("");
    };

    const chatDetail = dataChat.chatData.filter((data) => data.id == id)[0];

    return (
        <>
            <TopNav
                leftChild={<BackButton />}
                centerChild={chatDetail.userName}
                rightChild={<ModalButton onClick={() => setModal(!modal)} />}
            />
            <Main>
                <ChatRoomUl>
                    <ChatSenderLi>
                        <img src={process.env.PUBLIC_URL + chatDetail.image} />
                        <ChatSenderTxt>{chatDetail.message}</ChatSenderTxt>
                        <ChatRoomTime>12:00</ChatRoomTime>
                    </ChatSenderLi>

                    {chatlist.map((chatArr, i) => {
                        return (
                            <ChatMeLi key={i}>
                                <ChatMeLiTxt>{chatArr}</ChatMeLiTxt>
                                <ChatRoomTime>12:01</ChatRoomTime>
                            </ChatMeLi>
                        );
                    })}
                </ChatRoomUl>
            </Main>
            <InputFooter
                img={user ? user.image : ""}
                placeholder="메세지 입력하기..."
                value={chat}
                onChange={(e) => {
                    setChat(e.target.value);
                    e.target.value.length > 0
                        ? setDisabled(false)
                        : setDisabled(true);
                }}
                onClick={sendChat}
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
    );
}

export default Chat;
