import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    background-color: inherit;
    padding: 0;
    height: 22px;
    cursor: pointer;
`;

function ModalButton(props) {
    const { onClick } = props;

    return (
        <StyledButton onClick={onClick} aria-label="게시글설정버튼">
            <img
                src={process.env.PUBLIC_URL + "/icons/icon-more-vertical.png"}
                alt="게시글설정버튼"
                width="22px"
                height="22px"
            />
        </StyledButton>
    );
}

export default ModalButton;
