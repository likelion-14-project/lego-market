import React from "react";
import styled from "styled-components";
import ModalPortal from "../../Portal";

const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    height: 100vh;
    width: 100%;
    z-index: ${(props) => (props.modalState === false ? "-1" : "1000")};
    opacity: ${(props) => (props.modalState === false ? "0" : "1")};
`;

const ModalContent = styled.div`
    background-color: white;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    position: fixed;
    width: 100%;
    padding-top: 36px;
    padding-bottom: 16px;
    bottom: 0;
    transition: all 600ms;
    transform: translateY(${(props) => (props.modalState === false ? "150%" : "0")});
    ::before {
        content: "";
        width: 50px;
        height: 4px;
        display: block;
        background-color: #DBDBDB;
        border-radius: 5px;
        position: absolute;
        top: 18px;
        left: 50%;
        transform: translateX(-50%);
    }
`;

const StyledLi = styled.li`
    padding: 14px 26px;
    cursor: pointer;
`

// const mywant = (e) => {
//     if(e.target === ModalContent) {
//         return
//     }else {
//         setModalState(!modalState)
//     }
// }

function Modal(props) {
    const { modalState, setModalState } = props;

    return (
        <>
            <ModalPortal>
            <ModalWrapper modalState={modalState}>
                <ModalContent modalState={modalState}>
                    <ul>
                        <StyledLi>1</StyledLi>
                        <StyledLi>1</StyledLi>
                        <StyledLi>1</StyledLi>
                    </ul>
                </ModalContent>
            </ModalWrapper>
            </ModalPortal>
        </>
    );
}

export default Modal;
