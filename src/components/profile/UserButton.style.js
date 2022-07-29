import styled from "styled-components";
import Button from "../ui/Button";

export const StyledUl = styled.ul`
    margin-top: 24px;
    display: flex;
    justify-content: center;
    gap: 10px;
`;

export const Circle = styled.span`
    display: inline-block;
    background-color: inherit;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    padding: 0;
    border: 1px solid #dbdbdb;
    background-size: 20px 20px;
    background-position: center;
    background-repeat: no-repeat;
`;

export const Messaageicon = styled(Circle)`
    background-image: url(${process.env.PUBLIC_URL + "/icons/icon-message-circle.png"});
`;

export const Shareicon = styled(Circle)`
    background-image: url(${process.env.PUBLIC_URL + "/icons/icon-share.png"});
`;

export const FollowButton = styled(Button)`
    width: 120px;
    padding: 8px 0px;
`;

export const UnFollowButton = styled(FollowButton)`
    background-color: #fff;
    border: 1px solid #dbdbdb;
    color: #767676;
`;
