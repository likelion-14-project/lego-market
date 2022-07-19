import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    width: 100%;
    border: none;
    border-radius: 44px;
    background-color: #ffc85f;
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: #ffffff;
    cursor: pointer;
    /* :disabled {
        background-color: #d4d4d4;
    } */
`;

function Button(props) {
    const { onClick, content } = props;

    return (
        <StyledButton
            onClick={onClick}
            className={props.className}
        >
            {content}
        </StyledButton>
    );
}

Button.defaultProps = {
    disabled: true,
};

export default Button;
