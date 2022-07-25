import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ModalButton from "../ui/ModalButton";
import Modal from "../modal/Modal";
import AlertModal from "../modal/AlertModal";
import { timeForToday } from "../../utils/DateUtil";

const CommentItem = styled.li`
    position: relative;
    font-size: 14px;
    margin-bottom: 25px;
    width: 358px;
`;

const CommentUserWap = styled.div`
    display: flex;
    align-items: center;
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
    font-weight: 500;
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
const MoreRight = styled.div`
    margin-left: auto;
`;

function CommentCard(props) {
    const [modal, setModal] = useState(false);
    const [alertModal, setAlertModal] = useState(false);

    const modalMenuList = [
        {
            content: "삭제",
            onClick: () => {
                setAlertModal(true);
            },
        },
    ];
    const alertButton = {
        content: "삭제",
        onClick: () => {},
    };

    return (
        <>
            <CommentItem>
                <CommentUserWap>
                    <Link to="#none">
                        <CommentUserImg src={props.userProfile} />
                    </Link>
                    <UserIdLink to="#none">{props.userName}</UserIdLink>
                    <CommentDate>{timeForToday(props.createdAt)}</CommentDate>
                    <MoreRight>
                        <ModalButton
                            type="button"
                            onClick={() => setModal(!modal)}
                        />
                    </MoreRight>
                </CommentUserWap>
                <CommentTxt>{props.userCommet}</CommentTxt>
            </CommentItem>
            <Modal
                modal={modal}
                setModal={setModal}
                modalMenuList={modalMenuList}
            />
            <AlertModal
                alertModal={alertModal}
                setAlertModal={setAlertModal}
                setModal={setModal}
                content={"삭제하시겠어요?"}
                alertButton={alertButton}
            />
        </>
    );
}

export default CommentCard;
