import React from "react";
import ModalPortal from "../../../Portal";
import { ModalWrapper, ModalContent, StyledLi } from "./Modal.style";

function Modal(props) {
    const { modal, setModal, modalMenuList } = props;

    return (
        <>
            <ModalPortal>
                <ModalWrapper modal={modal} onClick={() => setModal(false)}>
                    <ModalContent
                        modal={modal}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ul>
                            {modalMenuList.map((item, index) => {
                                return (
                                    <StyledLi
                                        key={index}
                                        onClick={item.onClick}
                                    >
                                        {item.content}
                                    </StyledLi>
                                );
                            })}
                        </ul>
                    </ModalContent>
                </ModalWrapper>
            </ModalPortal>
        </>
    );
}

export default Modal;
