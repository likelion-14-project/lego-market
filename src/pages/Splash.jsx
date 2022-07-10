import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
// import fullLogo from "../../../asset/full-logo.png";
// import fullLogoWhite from "../../../asset/full-logo-white.png";
// import LoginModal from "../loginModal/LoginModal";
// import { useNavigate } from "react-router-dom";

const center = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const MainDiv = styled.div`
    width: 390px;
    height: 820px;
    text-align: center;
    overflow: hidden;
    box-sizing: content-box;
    background-color: ${(props) =>
        props.loginState === null ? "#fff" : "orange"};
    ${center}/* transition: all 600ms cubic-bezier(0.86, 0, 0.5, 1);  */
`;

const MainHeader = styled.header`
    transition: all 600ms cubic-bezier(0.86, 0, 0.5, 1);
    ${center}
    img {
        width: 200px;
        height: 200px;
    }
    top: ${(props) => (props.loginState === null ? "50%" : "30%")};
`;
//1. 2초딜레이 -> 토큰여부확인
//2. 토큰이 있으면 loginState = true
//3. loginState 가 true 면 Home.jsx 로 이동
//4. loginState 가 null 이면 loginModal 올라오도록 하기

function Splash() {
    // const [logosrc, setLogoSrc] = useState("icons/full-logo.png");
    const [accessToken, setAccessToken] = useState(null);
    const [splashLoading, setsplashLoading] = useState(false);
    const [loginState, setLoginState] = useState(null);
    // const navigate = useNavigate();

    function checkLoginState() {
        console.log("checkLoginState");
        if (accessToken === null) {
            console.log("token not exist");
            setLoginState(false);
            //     // setLogoSrc("icons/full-logo-white.png");
        } else {
            console.log("token exist");
            setLoginState(true);
            // navigate("home", { state: accessToken });
        }
        setsplashLoading(true);
    }
    function saveToken() {
        const token =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjQwZjM0MTZjYTFiNjNmODY1NzgwMCIsImV4cCI6MTY2MjM1ODkyNCwiaWF0IjoxNjU3MTc0OTI0fQ.-RKmj5O6CIrTDq4RsQODLjP4CkPRvmGb3kEoTaJLkMo";
        // 아놔 토큰이 계속 바뀜;
        setAccessToken(token);
        // navigate("home" , {state: {accessToken}});
    }
    function deleteToken() {
        setAccessToken(null);
        setLoginState(false);
    }

    useEffect(() => {
        let splash = setTimeout(() => {
            checkLoginState();
        }, 2000);
        return () => {
            clearTimeout(splash);
        };
    }, [accessToken]);

    return (
        <>
            <MainDiv></MainDiv>
        </>
    );
}

export default Splash;
