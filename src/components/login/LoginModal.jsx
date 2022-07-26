import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SocialLoginItem from "./SocialLoginItem";
import JoinLink from "./JoinLink";

const LoginArticle = styled.article`
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 462px;
    background-color: #fff;
    border-radius: 20px 20px 0px 0px;
    top: ${(props) => (props.splashLoading === false ? "140%" : "64%")};
    transition: all 600ms cubic-bezier(0.86, 0, 0.7, 1);
`;
const SocialLoginWrap = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 322px;
    padding: 0 34px;
    margin-top: 50px;
`;
function LoginModal({ splashLoading }) {
    return (
        <>
            <LoginArticle splashLoading={splashLoading}>
                <h2 className="visually_hidden">소셜로그인 및 회원가입</h2>
                <SocialLoginWrap>
                    <SocialLoginItem position={-67} socialName="카카오톡"/>
                    <SocialLoginItem position={-34} socialName="구글"/>
                    <SocialLoginItem position={-5} socialName="페이스북"/>
                </SocialLoginWrap>
                <JoinLink />
            </LoginArticle>
        </>
    );
}

export default LoginModal;
