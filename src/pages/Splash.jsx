import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LoginModal from "../components/login/LoginModal";
import { useNavigate } from "react-router-dom";
import { checkToken } from "../utils/CheckToken";

const MainDiv = styled.div`
    width: 100%;
    height: 100vh;
    text-align: center;
    overflow: hidden;
    box-sizing: content-box;
    background-color: ${(props) =>
        props.splashLoading === false ? "#fff" : "orange"};
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
    top: ${(props) => (props.splashLoading === false ? "50%" : "30%")};
`;

function Splash() {
    const [splashLoading, setsplashLoading] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        let splash = setTimeout(() => {
            if (checkToken()) {
                setsplashLoading(false);
                navigate("/home");
            }
            setsplashLoading(true);
        }, 1500);
        return () => {
            clearTimeout(splash);
        };
    });

    return (
        <MainDiv splashLoading={splashLoading}>
            <MainHeader splashLoading={splashLoading}>
                <img
                    alt="레고마켓로고"
                    src={
                        splashLoading === false
                            ? process.env.PUBLIC_URL + "/icons/full-logo.png"
                            : process.env.PUBLIC_URL +
                              "/icons/full-logo-white.png"
                    }
                />
            </MainHeader>
            <LoginModal splashLoading={splashLoading} />
        </MainDiv>
    );
}

export default Splash;
