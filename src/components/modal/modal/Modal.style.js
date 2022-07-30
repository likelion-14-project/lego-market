import styled from "styled-components";

export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    height: 100vh;
    width: 100%;
    z-index: 100;
    transition: all 600ms;
    visibility: ${(props) => (props.modal === false ? "hidden" : "visible")};
    opacity: ${(props) => (props.modal === false ? "0" : "1")};
`;

export const ModalContent = styled.div`
    background-color: white;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    position: fixed;
    width: 100%;
    padding-top: 36px;
    padding-bottom: 16px;
    bottom: 0;
    transition: all 600ms;
    transform: translateY(${(props) => (props.modal === false ? "150%" : "0")});
    ::before {
        content: "";
        width: 50px;
        height: 4px;
        display: block;
        background-color: #dbdbdb;
        border-radius: 5px;
        position: absolute;
        top: 18px;
        left: 50%;
        transform: translateX(-50%);
    }
`;

export const StyledLi = styled.li`
    padding: 14px 26px;
    cursor: pointer;
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
`;
