import styled from "styled-components";
import { Link } from "react-router-dom";

export const CommentSection = styled.section`
    max-width: 390px;
    padding: 20px 16px 0;
    margin: 0 auto;
`;

export const CommentItem = styled.li`
    position: relative;
    font-size: 14px;
    margin-bottom: 25px;
    width: 358px;
`;

export const CommentUserWap = styled.div`
    display: flex;
    align-items: center;
`;

export const CommentUserImg = styled.img`
    border: 0.5px solid #dbdbdb;
    border-radius: 50%;
    width: 36px;
    height: 36px;
`;
export const UserIdLink = styled(Link)`
    margin: 13px 10px;
    font-size: 14px;
    font-weight: 500;
`;

export const CommentDate = styled.span`
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #767676;
`;

export const CommentTxt = styled.p`
    margin-left: 50px;
    font-size: 14px;
`;
export const MoreRight = styled.div`
    margin-left: auto;
`;
