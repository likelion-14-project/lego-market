import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const UserAnchor = styled(Link)`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
`;
const UserProfileImg = styled.img`
    width: ${(props) => (props.imgSize === "small" ? "42px" : "50px")};
    height: ${(props) => (props.imgSize === "small" ? "42px" : "50px")};
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

function SearchUserItem({ profileImg, userName, userId, imgSize }) {
    const defaultImgSrc =
        process.env.PUBLIC_URL + "/images/LegoDefaultImage.png";
    return (
        <UserAnchor to={`/myprofile/${userId}`}>
            <UserProfileImg
                src={profileImg === null ? defaultImgSrc : profileImg}
                imgSize={imgSize}
            />
            <UserInfoDiv>
                <UserName>{userName}</UserName>
                <UserId>{userId}</UserId>
            </UserInfoDiv>
        </UserAnchor>
    );
}

SearchUserItem.defaultProps = {
    profileImg: null,
};

export default SearchUserItem;
