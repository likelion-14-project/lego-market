import React from 'react'
import styled from 'styled-components';

const StyledButton = styled.button`
    width: 100%;
    padding: 13px 0px;
    border: none;
    border-radius: 44px;
    background-color: #FFC7A7;
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;
    :hover {
        background-color: #F26E22
    }
`

function Button(props) {

    const {onClick, content} = props

    return (   
        <StyledButton onClick={onClick} className={props.className}>
            {content}
        </StyledButton>
    )
}

export default Button
