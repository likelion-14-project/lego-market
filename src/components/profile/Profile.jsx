import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProfileImage from "../ui/ProfileImage";
import UserButton from "./UserButton";
import MyButton from "./MyButton";
import { useProfile } from "../../hooks/useProfile";
import TopNav from "../ui/TopNav";
import BackButton from "../ui/BackButton";
import ModalButton from "../ui/ModalButton";
import Modal from "../modal/Modal";
import AlertModal from "../modal/AlertModal";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    padding: 30px 16px 26px;
    position: relative;
    margin: 0 auto;
`;

const StyledProfileImg = styled(ProfileImage)`
    display: block;
    margin: 0 auto;
`;

const Username = styled.strong`
    display: block;
    text-align: center;
    margin-top: 16px;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
`;

const UserId = styled.strong`
    display: block;
    text-align: center;
    margin-top: 6px;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #767676;
`;

const StyledP = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #767676;
    text-align: center;
    margin-top: 16px;
`;

const FollowerWrapper = styled.div`
    position: absolute;
    text-align: center;
    top: 65px;
    left: 40px;
`;

const FollowingWrapper = styled.div`
    position: absolute;
    text-align: center;
    top: 65px;
    right: 40px;
`;

const StyledStrong = styled.strong`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
`;

const StyledSpan = styled.span`
    display: block;
    margin-top: 6px;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    color: #767676;
`;

const FollowLink = styled(Link)`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
`;

const FollowingLink = styled(FollowLink)`
    color: #767676;
`;

function Profile(props) {
    const { profileAccountName, myAccountName } = props;
    const { error, profile, isPending } = useProfile(profileAccountName);
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
        },
    };

    if (profile) {
        return (
            <>
                {isPending ? (
                    <strong>로딩중입니다...</strong>
                ) : (
                    <>
                        {error ? (
                            <strong>{error}</strong>
                        ) : (
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
                                        <UserButton />
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
                        )}
                    </>
                )}
            </>
        );
    } else return null;
}

export default Profile;
