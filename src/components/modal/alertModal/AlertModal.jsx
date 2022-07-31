import React from "react";
import ModalPortal from "../../../Portal";
import {
    ModalWrapper,
    ModalContent,
    Strong,
    AlertMenuList,
    AlertItem,
    Button,
    StyledButton,
} from "./AlertModal.style";

function AlertModal(props) {
    const { content, alertModal, setAlertModal, setModal, alertButton } = props;

    return (
        <ModalPortal>
            <ModalWrapper alertModal={alertModal}>
                <ModalContent>
                    <Strong>{content}</Strong>
                    <AlertMenuList>
                        <AlertItem>
                            <Button
                                onClick={() => {
                                    setModal(false);
                                    setAlertModal(false);
                                }}
                            >
                                취소
                            </Button>
                        </AlertItem>
                        <AlertItem>
                            <StyledButton onClick={alertButton.onClick}>
                                {alertButton.content}
                            </StyledButton>
                        </AlertItem>
                    </AlertMenuList>
                </ModalContent>
            </ModalWrapper>
        </ModalPortal>
    );
}

export default AlertModal;
