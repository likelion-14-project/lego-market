import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";

const StyledUl = styled.ul`
    margin-top: 24px;
    display: flex;
    justify-content: center;
    gap: 10px;
`;

const Circle = styled.span`
    display: inline-block;
    background-color: inherit;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    padding: 0;
    border: 1px solid #dbdbdb;
    background-size: 20px 20px;
    background-position: center;
    background-repeat: no-repeat;
`;

const Messaageicon = styled(Circle)`
    background-image: url(${process.env.PUBLIC_URL + "/icons/icon-message-circle.png"});
`;

const Shareicon = styled(Circle)`
    background-image: url(${process.env.PUBLIC_URL + "/icons/icon-share.png"});
`;

const FollowButton = styled(Button)`
    width: 120px;
    padding: 8px 0px;
`;

const UnFollowButton = styled(FollowButton)`
    background-color: #fff;
    border: 1px solid #dbdbdb;
    color: #767676;
`;

function UserButton(props) {
    const {profileAccountName} = props
    // 팔로우를 하지 않은 상태이므로 팔로우 버튼이 나타나게
    const [isFollow, setIsFollow] = useState(false);
    const toggle = () => {
        setIsFollow(isFollow => !isFollow)
    }
    async function follow() {
        
        const url = "https://mandarin.api.weniv.co.kr";
        const token = window.localStorage.getItem("token");
        const response = await fetch(url + `/profile/${profileAccountName}/follow`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-type": "application/json",
            },
          });
          const json = await response.json();
          console.log(json);
          toggle();
    }
    async function unfollow(){
        const url = "https://mandarin.api.weniv.co.kr";
        const token = window.localStorage.getItem("token");
        const response = await fetch(url + `/profile/${profileAccountName}/unfollow`, {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-type": "application/json",
            },
          });
          const json = await response.json();
          console.log(json);
          toggle();
    }
    return (
        <StyledUl>
            <li>
                <Link to={""}>
                    <Messaageicon />
                </Link>
            </li>
            <li>
                {isFollow ? (
                    <UnFollowButton content="언팔로우" disabled={false} onClick={unfollow}/>
                ) : (
                    
                    <FollowButton content="팔로우" disabled={false} onClick={follow} />
                )}
            </li>
            <li>
                <Link to={""}>
                    <Shareicon />
                </Link>
            </li>
        </StyledUl>
    );
}

export default UserButton;
