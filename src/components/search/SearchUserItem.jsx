import React from "react";
import styled, { keyframes } from "styled-components";
import { Link, useLocation } from "react-router-dom";

const fadeOut = keyframes`
  0%{
    opacity : 0;
    
  }
  100%{
    opacity : 1;
  }
`
const ListWrap = styled.li`
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom : 16px;
    animation: ${fadeOut} 0.5s linear both;
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


//  

function SearchUserItem({ profileImg, userName, userId }) {
    const defaultImgSrc =
        process.env.PUBLIC_URL + "/images/LegoDefaultImage.png";
    return (
        <Link to={`/profile/${userName}`}>
          <ListWrap>
              <UserAnchor>
                  <UserProfileImg
                      src={profileImg === null ? defaultImgSrc : profileImg}
                  />
                  <UserInfoDiv>
                      <UserName>{userName}</UserName>
                      <UserId>{userId}</UserId>
                  </UserInfoDiv>
              </UserAnchor>
          </ListWrap>
        </Link>
    );
}

SearchUserItem.defaultProps = {
    profileImg: null,
};

export default SearchUserItem;
