import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CommentItem = styled.li`
    position: relative;
    font-size: 14px;
    margin-bottom: 16px;
`;

const CommentUserWap = styled.div`
    display: flex;
`;

const CommentUserImg = styled.img`
    border: 0.5px solid #dbdbdb;
    border-radius: 50%;
    width: 36px;
    height: 36px;
`;
const UserIdLink = styled(Link)`
    margin: 13px 10px;
    font-size: 14px;
`;

const CommentDate = styled.span`
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #767676;
`;

const CommentTxt = styled.p`
    margin-left: 50px;
    font-size: 14px;
`;

const MoreBtn = styled.button`
    content: "";
    position: absolute;
    top: 8px;
    right: 0;
    width: 20px;
    height: 20px;
    background-image: url(${process.env.PUBLIC_URL + `/icons/more.png`});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
`;

function CommentCard(props) {
    return (
        <CommentItem>
            <CommentUserWap>
                <Link to="#none">
                    <CommentUserImg src={props.userProfile} />
                </Link>
                <UserIdLink to="#none">{props.userName}</UserIdLink>
                <CommentDate>방금전</CommentDate>
            </CommentUserWap>
            <CommentTxt>{props.userCommet}</CommentTxt>
            <MoreBtn></MoreBtn>
        </CommentItem>
    );
}

export default CommentCard;
