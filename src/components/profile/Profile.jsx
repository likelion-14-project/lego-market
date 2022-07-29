import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Wrapper,
  StyledProfileImg,
  Username,
  UserId,
  StyledP,
  FollowerWrapper,
  FollowingWrapper,
  StyledStrong,
  StyledSpan,
  FollowLink,
  FollowingLink,
} from "./Profile.style";
import { useProfile } from "../../hooks/useProfile";
import UserButton from "./UserButton";
import MyButton from "./MyButton";
import TopNav from "../ui/TopNav";
import BackButton from "../ui/BackButton";
import ModalButton from "../ui/ModalButton";
import Modal from "../modal/Modal";
import AlertModal from "../modal/AlertModal";

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
      window.location.reload();
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
                  rightChild={<ModalButton onClick={() => setModal(!modal)} />}
                />
                <Wrapper>
                  <StyledProfileImg imgSrc={profile.image} />
                  <Username>{profile.username}</Username>
                  <UserId>@ {profile.accountname}</UserId>
                  <StyledP>{profile.intro}</StyledP>
                  {myAccountName === profileAccountName ? (
                    <MyButton />
                  ) : (
                    <UserButton profileAccountName={profileAccountName} />
                  )}

                  <FollowerWrapper>
                    <FollowLink to={`/follow/${profileAccountName}/follower`}>
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
