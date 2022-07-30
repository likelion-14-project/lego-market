import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProfile } from "../../../hooks/useProfile";

import LoadingPage from "../../../pages/LoadingPage";
import UserButton from "../userButton/UserButton";
import MyButton from "../myButton/MyButton";
import TopNav from "../../ui/topNav/TopNav";
import BackButton from "../../ui/backButton/BackButton";
import ModalButton from "../../ui/modalButton/ModalButton";
import Modal from "../../modal/modal/Modal";
import AlertModal from "../../modal/alertModal/AlertModal";
import {
    Wrapper,
    StyledProfileImg,
    Username,
    UserId,
    StyledP,
    FollowerWrapper,
    FollowLink,
    StyledSpan,
    FollowingWrapper,
    FollowingLink,
} from "./Profile.style";

function Profile(props) {
    const { profileAccountName, myAccountName } = props;
    const { error, profile, isPending, getProfile } = useProfile();
    const [modal, setModal] = useState(false);
    const [alertModal, setAlertModal] = useState(false);

    const navigate = useNavigate();

    const modalMenuList = [
        {
            content: "설정 및 개인정보",
            onClick: () => {},
        },
        {
            content: "로그아웃",
            onClick: () => {
                setAlertModal(true);
            },
        },
    ];

    const alertButton = {
        content: "로그아웃",
        onClick: () => {
            localStorage.removeItem("token");
            navigate("/");
            window.location.reload();
        },
    };

    useEffect(() => {
        getProfile(profileAccountName);
    }, [profileAccountName]);

    return (
        <>
            {isPending ? (
                <LoadingPage />
            ) : (
                <>
                    {profile ? (
                        <>
                            <TopNav
                                leftChild={<BackButton />}
                                rightChild={
                                    <ModalButton
                                        onClick={() => setModal(!modal)}
                                    />
                                }
                            />
                            <Wrapper>
                                <StyledProfileImg imgSrc={profile.image} />
                                <Username>{profile.username}</Username>
                                <UserId>@ {profile.accountname}</UserId>
                                <StyledP>{profile.intro}</StyledP>
                                {myAccountName === profileAccountName ? (
                                    <MyButton />
                                ) : (
                                    <UserButton
                                        profileAccountName={profileAccountName}
                                    />
                                )}

                                <FollowerWrapper>
                                    <FollowLink
                                        to={`/follow/${profileAccountName}/follower`}
                                    >
                                        {profile.followerCount}
                                    </FollowLink>
                                    <StyledSpan>followers</StyledSpan>
                                </FollowerWrapper>
                                <FollowingWrapper>
                                    <FollowingLink
                                        to={`/follow/${profileAccountName}/following`}
                                    >
                                        {profile.followingCount}
                                    </FollowingLink>
                                    <StyledSpan>followings</StyledSpan>
                                </FollowingWrapper>
                            </Wrapper>
                            <Modal
                                modal={modal}
                                setModal={setModal}
                                modalMenuList={modalMenuList}
                            />
                            <AlertModal
                                alertModal={alertModal}
                                setAlertModal={setAlertModal}
                                setModal={setModal}
                                content={"로그아웃하시겠어요?"}
                                alertButton={alertButton}
                            />
                        </>
                    ) : (
                        <></>
                    )}
                </>
            )}
        </>
    );
}

export default Profile;
