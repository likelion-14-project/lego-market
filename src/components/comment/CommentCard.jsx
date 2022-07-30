import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { timeForToday } from "../../utils/DateUtil";
import {
    CommentItem,
    CommentUserWap,
    UserIdLink,
    CommentUserImg,
    CommentDate,
    CommentTxt,
    MoreRight,
} from "./Comment.style";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useReport } from "../../hooks/useReport";

import ModalButton from "../ui/modalButton/ModalButton";
import Modal from "../modal/modal/Modal";
import AlertModal from "../modal/alertModal/AlertModal";

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
