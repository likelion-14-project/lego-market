import React from "react";
import { UserAnchor, UserProfileImg, UserInfoDiv, UserName, UserId } from "./SearchUserItem.style";


function SearchUserItem({ profileImg, userName, userId, imgSize }) {
    const defaultImgSrc = process.env.PUBLIC_URL + "/images/LegoDefaultImage.png";

    return (
        <UserAnchor to={`/myprofile/${userId}`} state={userId}>
            <UserProfileImg
                src={profileImg === null ? defaultImgSrc : profileImg}
                imgSize={imgSize}
                alt={`${userName}의 프로필이미지`}
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
