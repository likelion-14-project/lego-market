import React from "react";
import styled from "styled-components";

const SocialLoginItemList = styled.li`
    width: 100%;
    color: black;
    background-color: white;
    border-radius: 44px;
    margin-bottom: 10px;
    &::before {
        content: "";
        display: block;
        float: left;
        width: 24px;
        height: 24px;
        background-image: url(${process.env.PUBLIC_URL + "/icons/sprite-sns-2x.png"});
        background-repeat: no-repeat;
        background-size: 96px 34px;
        background-position: ${(props) => props.position}px -5px;
        margin-left: 14px;
        margin-top: 10px;
    }
    ${props => props.socialName === "카카오톡" && `
        border: 1px solid #f2c94c;
    `}
    ${props => props.socialName === "구글"  && `
        border: 1px solid #767676;
    `}
    ${props => props.socialName === "페이스북"  && `
        border: 1px solid #2d9cdb;
    `}
`;

const SocialLoginAnchor = styled.a`
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    display: block;
    padding: 13px 38px;
    text-align: center;
`;

const SocialLoginItem = ({ position, socialName }) => {
    return (
        <SocialLoginItemList position={position} socialName={socialName}>
            <SocialLoginAnchor>{socialName}계정으로 로그인</SocialLoginAnchor>
        </SocialLoginItemList>
    );
};

export default SocialLoginItem;
