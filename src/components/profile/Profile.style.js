import styled from "styled-components";
import { Link, Navigate } from "react-router-dom";
import ProfileImage from "../ui/ProfileImage";

export const Wrapper = styled.div`
    padding: 30px 16px 26px;
    position: relative;
    margin: 0 auto;
`;

export const StyledProfileImg = styled(ProfileImage)`
    display: block;
    margin: 0 auto;
`;

export const Username = styled.strong`
    display: block;
    text-align: center;
    margin-top: 16px;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
`;

export const UserId = styled.strong`
    display: block;
    text-align: center;
    margin-top: 6px;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #767676;
`;

export const StyledP = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #767676;
    text-align: center;
    margin-top: 16px;
`;

export const FollowerWrapper = styled.div`
    position: absolute;
    text-align: center;
    top: 65px;
    left: 40px;
`;

export const FollowingWrapper = styled.div`
    position: absolute;
    text-align: center;
    top: 65px;
    right: 40px;
`;

export const StyledStrong = styled.strong`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
`;

export const StyledSpan = styled.span`
    display: block;
    margin-top: 6px;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    color: #767676;
`;

export const FollowLink = styled(Link)`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
`;

export const FollowingLink = styled(FollowLink)`
    color: #767676;
`;