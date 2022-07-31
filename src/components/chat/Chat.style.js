import styled from "styled-components";

export const Main = styled.main`
    background-color: #f2f2f2;
    position: fixed;
    min-width: 100%;
    height: calc(100% - 108px);
`;

export const ChatRoomUl = styled.ul`
    box-sizing: border-box;
    margin: 10px 28px;
    img {
        width: 41px;
        height: 41px;
        object-fit: cover;
        border-radius: 50%;
        border: 1px solid #dbdbdb;
    }
`;

export const ChatSenderLi = styled.li`
    display: flex;
    align-items: flex-end;
    padding: 10px;
`;

export const ChatSenderTxt = styled.p`
    border-radius: 0 5px 5px 5px;
    border: 1px solid #c4c4c4;
    background-color: white;
    padding: 7px;
    margin-left: 12px;
`;

export const ChatMeLi = styled.li`
    display: flex;
    align-items: flex-end;
    flex-direction: row-reverse;
    padding: 10px;
`;

export const ChatMeLiTxt = styled.p`
    border-radius: 0 5px 5px 5px;
    border: 1px solid #ffc776;
    background-color: #ffc776;
    padding: 7px;
`;

export const ChatRoomTime = styled.p`
    color: #767676;
    font-size: 12px;
    padding: 6px;
`;
