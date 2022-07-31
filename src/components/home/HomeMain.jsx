import React from "react";
import { HomeMainWrap } from "./HomeMain.style";

function HomeMain() {
    const logo = "icons/symbol-logo-gray.png";
    return (
        <HomeMainWrap>
            <img src={logo} alt="기본로고" />
            <p className="text-gray">유저를 검색해 팔로우 해보세요 !</p>
            <button type="button" className="btn-search">
                검색하기
            </button>
        </HomeMainWrap>
    );
}

export default HomeMain;
