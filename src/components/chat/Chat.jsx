import React from "react";
import styled from "styled-components";
import { useState } from "react";
import InputFooter from "../ui/InputFooter";

const ChatRoomUl = styled.ul`
    box-sizing: border-box;
    margin: 10px 28px;
    img {
        width: 41px;
        height: 41px;
    }
`;

const ChatSenderLi = styled.li`
    display: flex;
    align-items: flex-end;
    padding: 10px;
`;

const ChatSenderTxt = styled.p`
    border-radius: 0 5px 5px 5px;
    border: 1px solid #c4c4c4;
    background-color: white;
    padding: 7px;
    margin-left: 12px;
`;

const ChatMeLi = styled.li`
    display: flex;
    align-items: flex-end;
    flex-direction: row-reverse;
    padding: 10px;
`;

const ChatMeLiTxt = styled.p`
    border-radius: 0 5px 5px 5px;
    border: 1px solid #ffc776;
    background-color: #ffc776;
    padding: 7px;
`;

const ChatRoomTime = styled.p`
    color: #767676;
    font-size: 12px;
    padding: 6px;
`;

function Chat() {
    const [chat, setChat] = useState("");
    const [chatlist, setChatList] = useState([]);
    const [disabled, setDisabled] = useState(true);

    let sendChat = (e) => {
        const copyChatlist = [...chatlist];
        copyChatlist.push(chat);
        setChatList(copyChatlist);
        setChat("");
    };

    const getNow = () => {
        return "12:41";
    };

    return (
        <>
            <ChatRoomUl>
                <ChatSenderLi>
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/images/LegoDefaultImage.png"
                        }
                    />
                    <ChatSenderTxt>안녕하세요!!</ChatSenderTxt>
                    <ChatRoomTime>12:00</ChatRoomTime>
                </ChatSenderLi>

                {chatlist.map((chatArr, i) => {
                    return (
                        <ChatMeLi key={i}>
                            <ChatMeLiTxt>{chatArr}</ChatMeLiTxt>
                            <ChatRoomTime>`${getNow}`</ChatRoomTime>
                        </ChatMeLi>
                    );
                })}
            </ChatRoomUl>

            <InputFooter
                // img={.author.image}
                placeholder="댓글 입력하기"
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
        </>
    );
}

export default Chat;
