import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const StyledButton = styled.button`
    background-color: inherit;
    padding: 0;
    height: 22px;
    cursor: pointer;
`

function BackButton() {

    const navigate = useNavigate()

    return (
        <StyledButton onClick={() => {
            navigate(-1)
        }} aria-label="뒤로가기버튼">
            <img src={process.env.PUBLIC_URL + "/icons/icon-arrow-left.png"} alt="뒤로가기이미지" width="22px" height="22px"/>
        </StyledButton>
    )
}

export default BackButton
