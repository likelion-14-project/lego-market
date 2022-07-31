import React, { useEffect, useState } from "react";
import Post from "../post/Post";
import PostAlbum from "./PostAlbum";
import { getProfilePost } from "../../hooks/useAxios";
import { useLocation } from "react-router-dom";
import {
    PostTypeControlDiv,
    PostTypeControlWrap,
    PostTypeControlIcon,
    ProfilePostWrap,
} from "./ProfilePost.style";

const ProfilePost = ({ profileAccountName }) => {
    const [profilePostData, setProfilePostData] = useState();
    const [refetch, setRefetch] = useState(0);
    const [btnState, setBtnState] = useState("list");
    const [accountName, setAccountName] = useState();
    const location = useLocation();

    function toggleBtnState() {
        btnState === "list" ? setBtnState("album") : setBtnState("list");
    }
    function reqRefetch(data) {
        setRefetch(data);
    }

    useEffect(() => {
        let data = location?.state;
        if (data) {
            setAccountName(data);
        } else if (profileAccountName) {
            console.log("profileAccountName");
            setAccountName(profileAccountName);
        }
    }, [location, profileAccountName]);

    useEffect(() => {
        if (accountName) {
            (async () => {
                const res = await getProfilePost(accountName);
                if (res) {
                    setProfilePostData(res);
                    console.log(res);
                }
            })();
        }
    }, [accountName, refetch]);

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
            {profilePostData && (
                <ProfilePostWrap>
                    {btnState === "list" ? (
                        <Post datas={profilePostData?.post} reqRefetch={reqRefetch} />
                    ) : (
                        <PostAlbum datas={profilePostData?.post} />
                    )}
                </ProfilePostWrap>
            )}
        </>
    );
};

export default ProfilePost;
