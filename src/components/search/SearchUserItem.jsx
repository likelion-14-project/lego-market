import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const ListWrap = styled.li`
    position: relative;
    display: flex;
    align-items: center;
`;
const UserAnchor = styled.a`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
`;
const UserProfileImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 0.5px solid #f2f2f2;
    font-size: 10px;
    overflow: hidden;
`;

const UserInfoDiv = styled.div`
    margin-left: 12px;
    width: calc(100% - 118px);
    height: 100%;
    align-self: flex-start;
`;

const UserName = styled.strong`
    display: block;
    margin: 5px 0 6px;
    line-height: 18px;
    font-size: 14px;
    font-weight: 500;
`;
const UserId = styled.strong`
    color: #767676;
    font-size: 12px;
    line-height: 15px;
    &::before {
        content: "@";
        margin-right: 3px;
    }
`;

function SearchUserItem() {
    return <ListWrap>
      <UserAnchor>
        <UserProfileImg />
        <UserInfoDiv>
          <UserName></UserName>
          <UserId></UserId>
        </UserInfoDiv>
      </UserAnchor>
    </ListWrap>;
}

export default SearchUserItem;
