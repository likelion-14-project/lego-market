import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// line-height, font-size 반복됨 
const SignUpWrap = styled.div`
    margin-top: 8px;
    display: flex;
    align-items: center;
    line-height: 15px;
    font-size: 12px;
`;

const SignUpLink = styled(Link)`
    font-weight: 400;
    line-height: 15px;
    font-size: 12px;
    &:last-child::before {
        content: "|";
        vertical-align: top;
        margin: 0 10px;
        display: inline-block;
    }
`;
const JoinLink = () => {
    return (
        <SignUpWrap>
            <SignUpLink to="/loginpage">
                <strong> 이메일로 로그인</strong>
            </SignUpLink>
            <SignUpLink to="/joinpage">
                <strong>회원가입</strong>
            </SignUpLink>
        </SignUpWrap>
    );
};

export default JoinLink;
