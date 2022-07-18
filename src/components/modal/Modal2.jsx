import React from "react";
import styled from "styled-components";
import ReactDom from "react-dom"

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.6);
    transition: all 3s ease;
    opacity: ${(props) => props.show === false ? "0" : "1"};
    visibility: ${(props) => props.show === false ? "hidden" : "visible"};
    
`;

const Modal = styled.div`
    background-color: rgba(255, 255, 255, 0.35);
    width: calc(15rem + 15vw);
    height: auto;
    padding: 2rem;
    border-radius: 20px;
    transition: all 0.4s ease;
    transform: translateY(${(props) => props.show === false ? "-600px" : "0"});
`;

const ModalHeader = styled.header`
    position: relative;
    border-bottom: 1px solid #dddddd;
`;

const Modal_Header_Title = styled.h2`
    text-align: center;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
`;

const ModalMain = styled.main`
    border-bottom: 1px solid #dddddd;
    padding: 2rem 0;
`;

const ModalFooter = styled.footer`
    padding: 2rem 0;
    padding-bottom: 0;
`;

const ModalClose = styled.button`
    float: right;
    padding: 0.5rem;
    border-radius: 8px;
    cursor: pointer;
`;

const SubmitButton = styled.button`
    float: right;
    padding: 0.5rem;
    border-radius: 8px;
    margin-right: 1rem;
    cursor: pointer;
`;

function Modal2(props) {
    const { show, close, title, children } = props;

    return ReactDom.createPortal(
        <>
        {show ? (
            <ModalContainer onClick={() => close()} show={show}>
                <Modal onClick={(e) => e.stopPropagation()}>
                    <ModalHeader>
                        <Modal_Header_Title>{title}</Modal_Header_Title>
                        <CloseButton onClick={() => close()}>Close</CloseButton>
                    </ModalHeader>
                    <ModalMain>{children}</ModalMain>
                    <ModalFooter>
                        <ModalClose onClick={() => close()}>Cancel</ModalClose>
                        <SubmitButton>Submit</SubmitButton>
                    </ModalFooter>
                </Modal>
            </ModalContainer>
        ) : null}
    </>
        , document.getElementById("modal")
    );
}

export default Modal2;
