import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    FollowItem,
    UserLink,
    UserImg,
    UserName,
    UserIdWap,
    UserIntro,
    BtnFollow,
} from "./Follow.style";

function FollowCard(props) {
    let [follow, isFollow] = useState(props.isfollow);

    const { profileAccountName } = props;

    async function following() {
        const url = "https://mandarin.api.weniv.co.kr";
        const token = window.localStorage.getItem("token");
        const response = await fetch(
            url + `/profile/${props.accountname}/follow`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-type": "application/json",
                },
            }
        );
        const json = await response.json();
        console.log(json);
        isFollow(true);
    }

    async function unfollow() {
        const url = "https://mandarin.api.weniv.co.kr";
        const token = window.localStorage.getItem("token");
        const response = await fetch(
            url + `/profile/${props.accountname}/unfollow`,
            {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-type": "application/json",
                },
            }
        );
        const json = await response.json();
        console.log(json);
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
                    <Link to={`/myprofile/${props.accountname}`}>
                        <UserName>{props.username}</UserName>
                    </Link>
                    <UserIntro>{props.intro}</UserIntro>
                </UserIdWap>
                {follow ? (
                    <BtnFollow bg="#fff" onClick={unfollow}>
                        팔로잉
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
