import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    StyledUl,
    Messaageicon,
    UnFollowButton,
    FollowButton,
    Shareicon,
} from "./UserButton.style";

function UserButton(props) {
    const { profileAccountName } = props;
    const [isFollow, setIsFollow] = useState(false);
    const toggle = () => {
        setIsFollow((isFollow) => !isFollow);
    };
    async function follow() {
        const url = "https://mandarin.api.weniv.co.kr";
        const token = window.localStorage.getItem("token");
        const response = await fetch(
            url + `/profile/${profileAccountName}/follow`,
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
        toggle();
    }
    async function unfollow() {
        const url = "https://mandarin.api.weniv.co.kr";
        const token = window.localStorage.getItem("token");
        const response = await fetch(
            url + `/profile/${profileAccountName}/unfollow`,
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
                    <UnFollowButton
                        content='언팔로우'
                        disabled={false}
                        onClick={unfollow}
                    />
                ) : (
                    <FollowButton
                        content='팔로우'
                        disabled={false}
                        onClick={follow}
                    />
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
