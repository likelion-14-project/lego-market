import React from 'react'
import styled from 'styled-components';

const StyledButton = styled.button`
    width: 100%;
    border: none;
    border-radius: 44px;
    background-color: #F26E22;
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;

    :disabled {
        background-color: #FFC7A7;
        cursor: default;
    }

`


function Button(props) {

    const {onClick, content, disabled} = props

    return (   
        <StyledButton 
            onClick={onClick} 
            className={props.className}
            disabled={disabled}
        >
            {content}
        </StyledButton>
    )
}

Button.defaultProps = {
    disabled : true
}

export default Button
