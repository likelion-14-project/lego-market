import styled from "styled-components";
import { Link } from "react-router-dom";

export const ChatListMain = styled.main`
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 24px 16px;
    /* overflow-y: scroll; */
`;

export const ChatListUl = styled.ul`
    width: 100%;
    max-width: 390px;
`;
export const ChatListli = styled.li`
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
`;
export const UserLink = styled(Link)`
    img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 50%;
        border: 1px solid #dbdbdb;
    }
    ::before {
        position: absolute;
        content: "";
        left: 0;
        top: 3px;
        width: 12px;
        height: 12px;
        background-color: #ea4335;
        border-radius: 50%;
    }
`;
export const ListWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
`;
export const UserName = styled.strong`
    font-weight: 400;
    font-size: 14px;
    margin: 2px 0 6px 0;
`;
export const UserMessage = styled.strong`
    font-size: 12px;
    color: #767676;
`;
export const ChatDate = styled.strong`
    position: absolute;
    right: 0;
    bottom: 3px;
    font-weight: 400;
    font-size: 10px;
    color: #dbdbdb;
`;
