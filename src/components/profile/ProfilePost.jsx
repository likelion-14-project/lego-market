import React, { useEffect, useState } from "react";
import Post from "../post/Post";
import PostAlbum from "./PostAlbum";
import { useAxios } from "../../hooks/useAxios";
import { useLocation } from "react-router-dom";
import {
    PostTypeControlDiv,
    PostTypeControlWrap,
    PostTypeControlIcon,
    ProfilePostWrap,
} from "./ProfilePost.style";

const ProfilePost = ({ profileAccountName }) => {
    const [btnState, setBtnState] = useState("list");
    const [accountName, setAccountName] = useState();
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
        let data = location?.state;
        callRefetch();
        if (data) {
            setAccountName(data);
        } else if (profileAccountName) {
            setAccountName(profileAccountName);
        }
    }, [location, profileAccountName]);
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
                        <Post datas={response?.data.post} callRefetch={callRefetch} />
                    ) : (
                        <PostAlbum datas={response?.data.post} />
                    )}
                </ProfilePostWrap>
            )}
        </>
    );
};

export default ProfilePost;
