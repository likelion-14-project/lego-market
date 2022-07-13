import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LoginModal from "../components/login/LoginModal";
import { useNavigate } from "react-router-dom";

const MainDiv = styled.div`
    width: 100%;
    height: 100vh;
    text-align: center;
    overflow: hidden;
    box-sizing: content-box;
    background-color: ${(props) =>
        props.loginState === false ? "#fff" : "orange"};
    margin: auto;
    transition: all 600ms cubic-bezier(0.86, 0, 0.5, 1);
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
            navigate("home");
        }
    }
    useEffect(() => {
        let splash = setTimeout(() => {
            checkLoginState();
        }, 1500);
        return () => {
            clearTimeout(splash);
        };
    }, [navigate, loginState, accessToken]);

    return (
        <>
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
        </>
    );
}

export default Splash;
