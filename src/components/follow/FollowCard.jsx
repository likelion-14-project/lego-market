import React from "react";
import styled from "styled-components";
import { useState } from "react";

import { Link } from "react-router-dom";

const FollowItem = styled.li`
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
`;

const BtnFollow = styled.button`
    width: 56px;
    height: 28px;
    background: ${(props) => props.bg};
    color: ${(props) => (props.bg == "#fff" ? "#767676" : "#fff")};
    border: 1px solid #dbdbdb;
    font-size: 12px;
    border-radius: 26px;
    cursor: pointer;
`;
const UserLink = styled(Link)`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 0.5px solid #dbdbdb;
    font-size: 10px;
    overflow: hidden;
`;

const UserImg = styled.img`
    height: 100%;
    object-fit: cover;
`;

const UserIdWap = styled.div`
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
const UserIntro = styled.strong`
    color: #767676;
    font-size: 12px;
    line-height: 15px;
`;

function FollowCard(props) {
    let [follow, isFollow] = useState(false);

    function following() {
        isFollow(true);
    }

    function unfollow() {
        isFollow(false);
    }

    return (
        <>
            <FollowItem>
                <UserLink to={`/myprofile/${props.accountname}`}>
                    {props.image ? (
                        <UserImg src={props.image} />
                    ) : (
                        <UserImg
                            src={
                                process.env.PUBLIC_URL +
                                "/images/LegoDefaultImage.png"
                            }
                        />
                    )}
                </UserLink>
                <UserIdWap>
                    <UserName>{props.username}</UserName>
                    <UserIntro>{props.intro}</UserIntro>
                </UserIdWap>
                {follow ? (
                    <BtnFollow bg="#fff" onClick={unfollow}>
                        언팔로우
                    </BtnFollow>
                ) : (
                    <BtnFollow bg="#EA4335" onClick={following}>
                        팔로우
                    </BtnFollow>
                )}
            </FollowItem>
        </>
    );
}

export default FollowCard;
