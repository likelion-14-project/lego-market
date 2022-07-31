import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TopNav from "../ui/topNav/TopNav";
import BackButton from "../ui/backButton/BackButton";
import FollowCard from "./FollowCard";

const Main = styled.main`
    min-width: 390px;
    width: 100%;
    height: 100%;
    background-color: #fff;
    margin-top: 48px;
`;

const FollowList = styled.ul`
    max-width: 390px;
    margin: 0 auto;
    padding: 24px 16px;
`;

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
