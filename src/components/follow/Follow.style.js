import styled from "styled-components";
import { Link } from "react-router-dom";

export const Main = styled.main`
    min-width: 390px;
    width: 100%;
    height: 100%;
    background-color: #fff;
    margin-top: 48px;
`;

export const FollowList = styled.ul`
    max-width: 390px;
    margin: 0 auto;
    padding: 24px 16px;
`;
export const FollowItem = styled.li`
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
`;

export const BtnFollow = styled.button`
    width: 58px;
    height: 28px;
    background: ${(props) => props.bg};
    color: ${(props) => (props.bg == "#fff" ? "#767676" : "#fff")};
    border: 1px solid ${(props) => (props.bg == "#fff" ? "#dbdbdb" : "none")};
    font-size: 12px;
    border-radius: 26px;
    cursor: pointer;
`;
export const UserLink = styled(Link)`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 0.5px solid #dbdbdb;
    font-size: 10px;
    overflow: hidden;
    text-align: center;
`;

export const UserImg = styled.img`
    height: 100%;
    object-fit: cover;
`;

export const UserIdWap = styled.div`
    margin-left: 12px;
    width: calc(100% - 118px);
    height: 100%;
    align-self: flex-start;
`;

export const UserName = styled.strong`
    display: block;
    margin: 5px 0 6px;
    line-height: 18px;
    font-size: 14px;
    font-weight: 500;
`;
export const UserIntro = styled.p`
    color: #767676;
    font-size: 12px;
    line-height: 15px;
    width: 240px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
