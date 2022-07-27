import React, { useEffect, useState } from "react";
import Post from "../home/Post";
import PostAlbum from "./PostAlbum";
import { useAxios } from "../../hooks/useAxios";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

const PostTypeControlDiv = styled.div`
    width: 100%;
    border-top: 1px solid #727272;
    border-bottom: 0.5px solid #727272;
    padding: 10px 16px;
    margin-bottom: 16px;
    display: flex;
    justify-content: center;
`;
const PostTypeControlWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-right: 16px;
`;
const PostTypeControlIcon = styled.img`
    width: 26px;
    height: 26px;
    cursor: pointer;
`;

const ProfilePostWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ProfilePost = ({profileAccountName}) => {
    const [btnState, setBtnState] = useState("list");
    const [accountName, setAccountName] = useState(profileAccountName);
    const location = useLocation();

    function toggleBtnState() {
        btnState === "list" ? setBtnState("album") : setBtnState("list");
    }

    let getUserPost = {
        url: `/post/${accountName}/userpost`,
        method: "GET",
    };

    const { response, callRefetch } = useAxios(getUserPost);

    useEffect(() => {
        console.log(location);
        let data = location?.state;
        callRefetch();
        if (data) {
            setAccountName(data);
        } else if(profileAccountName){
            setAccountName(profileAccountName);
        }
    }, [location]);
    return (
        <>
            <PostTypeControlDiv>
                <PostTypeControlWrap>
                    <button type="button" onClick={toggleBtnState}>
                        <PostTypeControlIcon
                            src={
                                btnState === "list"
                                    ? process.env.PUBLIC_URL + "/icons/icon-post-list-on.png"
                                    : process.env.PUBLIC_URL + "/icons/icon-post-list-off.png"
                            }
                        />
                    </button>
                    <button type="button" onClick={toggleBtnState}>
                        <PostTypeControlIcon
                            src={
                                btnState === "list"
                                    ? process.env.PUBLIC_URL + "/icons/icon-post-album-off.png"
                                    : process.env.PUBLIC_URL + "/icons/icon-post-album-on.png"
                            }
                        />
                    </button>
                </PostTypeControlWrap>
            </PostTypeControlDiv>
            {response && (
                <ProfilePostWrap>
                    {btnState === "list" ? (
                        <Post datas={response?.data.post} />
                    ) : (
                        <PostAlbum datas={response?.data.post} />
                    )}
                </ProfilePostWrap>
            )}
        </>
    );
};

export default ProfilePost;
