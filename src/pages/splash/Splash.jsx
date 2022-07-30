import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginModal from "../../components/login/loginModal/LoginModal";
import { MainDiv, MainHeader } from "./Splash.style";

function Splash({tokenState}) {
    const [splashLoading, setsplashLoading] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        let splash = setTimeout(() => {
            if (tokenState) {
                setsplashLoading(false);
                navigate("/home");
            }
            setsplashLoading(true);
        }, 1000);
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
                            : process.env.PUBLIC_URL + "/icons/full-logo-white.png"
                    }
                />
            </MainHeader>
            <LoginModal splashLoading={splashLoading} />
        </MainDiv>
    );
}

export default Splash;
