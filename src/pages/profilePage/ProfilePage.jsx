import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

import Profile from "../../components/profile/profile/Profile";
import ProfilePost from "../../components/post/profilePost/ProfilePost";
import ProductList from "../../components/productlist/ProductList";

const ProfileMainWrap = styled.div`
    min-width: 390px;
    width: 100%;
    height: calc(100% - 61px);
    overflow-y: auto;
    overflow-x: hidden;
`;

function ProfilePage() {
    const { accountname } = useParams();
    const { user } = useAuthContext();

    let profileAccountName;
    let myAccountName;
    if (user) {
        myAccountName = user.accountname;

        accountname === undefined
            ? (profileAccountName = myAccountName)
            : (profileAccountName = accountname);
    }

    return (
        <ProfileMainWrap>
            <Profile
                profileAccountName={profileAccountName}
                myAccountName={myAccountName}
            />
            <ProductList
                profileAccountName={profileAccountName}
                myAccountName={myAccountName}
            />
            <ProfilePost profileAccountName={profileAccountName} />
        </ProfileMainWrap>
    );
}

export default ProfilePage;
