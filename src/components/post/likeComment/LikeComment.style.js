import { Link } from "react-router-dom";
import styled from "styled-components";

export const LikeCommentDiv = styled.div`
    display: flex;
    margin-bottom: 16px;
`;
export const LIkeCommentIcon = styled.img`
    display: block;
    width: 20px;
    height: 20px;
    margin-right: 6px;
    margin-top: 1px;
    cursor: pointer;
`;
export const LikeButton = styled.button`
    display: flex;
    margin-right: 18px;
    background-color: inherit;
    padding: 0;
`;
export const LikeCommentCounter = styled.span`
    font-weight: 400;
    font-size: 17px;
    line-height: 22px;
`;
export const LinkToPost = styled(Link)`
    display: flex;
    margin-right: 18px;
    background-color: inherit;
    padding: 0;
`;
