import React, { useEffect } from "react";
import Profile from "../components/profile/Profile";
import { Link, useParams } from "react-router-dom";
import { useInfo } from "../hooks/useInfo";
import { useAuthContext } from "../hooks/useAuthContext";
import ProductList from '../components/productlist/ProductList';

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
        <>
            <Profile
                // 프로필에서 띄워줄 accountname
                profileAccountName={profileAccountName}
                // 저희가 로그인한 유저의 accountanme
                myAccountName={myAccountName}
            />
            {/* 재모님 : 상품리스트 // accountname만 필요함 */}
            <ProductList profileAccountName={profileAccountName} myAccountName={myAccountName}/>
            {/* 원형님 :  */}
        </>
    );
}

export default ProfilePage;
