import React from "react";
import Profile from "../components/profile/Profile";
import { Link, useParams } from "react-router-dom";
import { useInfo } from "../hooks/useInfo";
import { useAuthContext } from "../hooks/useAuthContext";
import ProfilePost from "../components/profile/ProfilePost";
import styled from "styled-components";

import ProductList from '../components/productlist/ProductList';
const ProfileMainWrap = styled.div`
    min-width: 390px;
    width: 100%;
    height: calc(100% - 61px);
    overflow-y: auto;
    overflow-x: hidden;
`;
function ProfilePage() {
    // 쿼리로 넘어오는거
    // 자기프로필이면 accountname이 undefined임

    console.log("프로필페이지 렌더링");
    const { accountname } = useParams();
    const { user } = useAuthContext();
    console.log("user : ", user);

    // 우리가 진짜 필요한 거를 profileAccountName
    let profileAccountName;
    let myAccountName;
    if (user) {
        myAccountName = user.accountname;
        console.log(myAccountName);

        accountname === undefined
            ? (profileAccountName = myAccountName)
            : (profileAccountName = accountname);
    }

    return (
        <ProfileMainWrap>
            <Profile
                // 프로필에서 띄워줄 accountname
                profileAccountName={profileAccountName}
                // 저희가 로그인한 유저의 accountanme
                myAccountName={myAccountName}
            />
             <ProductList profileAccountName={profileAccountName} myAccountName={myAccountName}/>
            <ProfilePost />
        </ProfileMainWrap>
    );
}

export default ProfilePage;
