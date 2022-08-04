import React, { useEffect, useState } from "react";
import TopNav from "../ui/topNav/TopNav";
import BackButton from "../ui/backButton/BackButton";
import FollowCard from "./FollowCard";
import { Main, FollowList } from "./Follow.style";

function Follow({ accountname, type }) {
    const [userlist, setUserList] = useState([]);

    async function getFollow(accountname, type) {
        if (accountname === undefined || type === undefined) {
            return;
        }
        const url =
            "https://mandarin.api.weniv.co.kr/profile/" +
            accountname +
            "/" +
            type;

        const token = localStorage.getItem("token");

        const res = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-type": "application/json",
            },
        });

        const json = await res.json();
        console.log(json);
        setUserList(json);
    }
    useEffect(() => {
        getFollow(accountname, type);
    }, []);

    return (
        <>
            <TopNav leftChild={<BackButton />} centerChild={type} />
            <Main>
                <FollowList>
                    {userlist.map((userArr, i) => {
                        return (
                            <FollowCard
                                accountname={userArr.accountname}
                                image={userArr.image}
                                username={userArr.username}
                                intro={userArr.intro}
                                isfollow={userArr.isfollow}
                                key={i}
                            />
                        );
                    })}
                </FollowList>
            </Main>
        </>
    );
}

export default Follow;
