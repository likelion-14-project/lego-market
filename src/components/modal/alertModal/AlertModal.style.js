import styled from "styled-components";

export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    visibility: ${(props) =>
        props.alertModal === false ? "hidden" : "visible"};
`;

export const ModalContent = styled.div`
    display: inline-block;
    border-radius: 10px;
    background-color: white;
    overflow: hidden;
`;

export const Strong = styled.strong`
    display: inline-block;
    padding: 22px 55px;
    border-bottom: 0.5px solid #dbdbdb;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    font-family: "Spoqa Han Sans Neo";
`;

export const AlertMenuList = styled.ul`
    display: flex;
`;

export const AlertItem = styled.li`
    text-align: center;
    flex-grow: 1;
    :not(:last-child) {
        border-right: 0.5px solid #dbdbdb;
    }
`;

export const Button = styled.button`
    background-color: white;
    cursor: pointer;
    width: 100%;
    padding: 14px 0;
`;

export const StyledButton = styled(Button)`
    color: #f26e22;
`;
