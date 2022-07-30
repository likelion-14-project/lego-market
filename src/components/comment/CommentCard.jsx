import React, { useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import ModalButton from "../ui/modalButton/ModalButton";
import Modal from "../modal/modal/Modal";
import AlertModal from "../modal/alertModal/AlertModal";
import { timeForToday } from "../../utils/DateUtil";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useReport } from "../../hooks/useReport";

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
    const { remove, comment_id, commentAuthor } = props;
    const [modal, setModal] = useState(false);
    const [deleteAlertModal, setDeleteAlertModal] = useState(false);
    const [reportAlertModal, setReportAlertModal] = useState(false);
    const { post_id } = useParams();
    const { user } = useAuthContext();
    const { report } = useReport();

    let modalMenuList;

    user.accountname === commentAuthor
        ? (modalMenuList = [
              {
                  content: "삭제",
                  onClick: () => {
                      setDeleteAlertModal(true);
                  },
              },
          ])
        : (modalMenuList = [
              {
                  content: "신고",
                  onClick: () => {
                      setReportAlertModal(true);
                  },
              },
          ]);

    const deleteAlertButton = {
        content: "삭제",
        onClick: () => {
            remove(`/post/${post_id}/comments/${comment_id}`);
            setModal(false);
            setDeleteAlertModal(false);
        },
    };

    const reportAlertButton = {
        content: "신고",
        onClick: () => {
            report(`/post/${post_id}/comments/${comment_id}/report`);
            alert("신고가 접수되었습니다.");
            setModal(false);
            setReportAlertModal(false);
        },
    };

    return (
        <>
            <CommentItem>
                <CommentUserWap>
                    <Link to='#none'>
                        <CommentUserImg src={props.userProfile} />
                    </Link>
                    <UserIdLink to='#none'>{props.userName}</UserIdLink>
                    <CommentDate>{timeForToday(props.createdAt)}</CommentDate>
                    <MoreRight>
                        <ModalButton
                            type='button'
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
                alertModal={deleteAlertModal}
                setAlertModal={setDeleteAlertModal}
                setModal={setModal}
                content={"삭제하시겠어요?"}
                alertButton={deleteAlertButton}
            />
            <AlertModal
                alertModal={reportAlertModal}
                setAlertModal={setReportAlertModal}
                setModal={setModal}
                content={"신고하시겠어요?"}
                alertButton={reportAlertButton}
            />
        </>
    );
}

export default CommentCard;
