import React from "react";
import styled from "styled-components";
const HomeMainWrap = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    img {
        width: 100px;
        height: 100px;
    }
    .text-gray {
        font-size: 14px;
        font-weight: 400;
        line-height: 14px;
        margin: 23px 0 20px 0;
        color: #767676;
    }

    button.btn-search {
        width: 120px;
        height: 44px;
        background-color: #ea4335;
        color: white;
        border-radius: 44px;
    }
`;

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
