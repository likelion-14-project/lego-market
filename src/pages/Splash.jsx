import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LoginModal from "../components/login/LoginModal";
import { useNavigate } from "react-router-dom";

const MainWrapper = styled.div`
    width: 390px;
    margin: auto;
`;

const MainDiv = styled.div`
    height: 820px;
    text-align: center;
    overflow: hidden;
    box-sizing: content-box;
    background-color: ${(props) =>
        props.loginState === false ? "#fff" : "orange"};
    margin: auto;
    /* transition: all 600ms cubic-bezier(0.86, 0, 0.5, 1);  */
`;
const MainHeader = styled.header`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 600ms cubic-bezier(0.86, 0, 0.5, 1);
    img {
        width: 200px;
        height: 200px;
    }
    top: ${(props) => (props.loginState === false ? "50%" : "30%")};
`;
//1. 2초딜레이 -> 토큰여부확인
//2. 토큰이 있으면 loginState = true
//3. loginState 가 true 면 Home.jsx 로 이동
//4. loginState 가 null 이면 loginModal 올라오도록 하기

function Splash() {
    const [accessToken, setAccessToken] = useState(null);
    const [splashLoading, setsplashLoading] = useState(true);
    const [loginState, setLoginState] = useState(false);
    const navigate = useNavigate();

    function checkLoginState() {
        console.log("checkLoginState");
        const usertoken = accessToken;
        if (usertoken === null) {
            console.log("token not exist");
            setLoginState(true);
        } else {
            console.log("token exist");
            setsplashLoading(false);
            setLoginState(true);
            navigate("home", { state: usertoken });
        }
    }
    function saveToken() {
        const token =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjQwZjM0MTZjYTFiNjNmODY1NzgwMCIsImV4cCI6MTY2MjM1ODkyNCwiaWF0IjoxNjU3MTc0OTI0fQ.-RKmj5O6CIrTDq4RsQODLjP4CkPRvmGb3kEoTaJLkMo";
        localStorage.setItem("token", token);
        setAccessToken(localStorage.getItem("token"));
        setLoginState(false);
    }
    function deleteToken() {
        setLoginState(false);
    }

    useEffect(() => {
        setAccessToken(localStorage.getItem("token"));
    }, [accessToken]);

    useEffect(() => {
        let splash = setTimeout(() => {
            checkLoginState();
        }, 1500);
        return () => {
            clearTimeout(splash);
        };
    }, [navigate, loginState, accessToken]);

    return (
        <MainWrapper>
            {accessToken === null ? (
                <button onClick={saveToken}>토큰 저장 버튼</button>
            ) : (
                <button onClick={deleteToken}>토큰 삭제 버튼</button>
            )}
            {splashLoading && (
                <MainDiv loginState={loginState}>
                    <MainHeader loginState={loginState}>
                        <img
                            alt="레고마켓로고"
                            src={
                                loginState === false
                                    ? process.env.PUBLIC_URL +
                                      "/icons/full-logo.png"
                                    : process.env.PUBLIC_URL +
                                      "/icons/full-logo-white.png"
                            }
                        />
                    </MainHeader>
                    <LoginModal loginState={loginState} />
                </MainDiv>
            )}
        </MainWrapper>
    );
}

export default Splash;
