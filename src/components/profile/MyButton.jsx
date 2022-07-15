import React from 'react'
import styled from 'styled-components'
import Button from '../ui/Button'

const StyledUl = styled.ul`
margin-top: 24px;
display: flex;
justify-content: center;
gap: 12px;
`

const StyledButtonLeft = styled(Button)`
    width: 120px;
    background-color: #fff;
    padding: 8px 0px;
    color: #767676;
    border: 1px solid #DBDBDB;
`

const StyledButtonRight = styled(Button)`
    width: 100px;
    background-color: #fff;
    padding: 8px 0px;
    color: #767676;
    border: 1px solid #DBDBDB;
`

function MyButton() {

    return (
        <StyledUl>
            <li>
                <StyledButtonLeft 
                    content="프로필 수정"
                    disabled={false}
                />
            </li>
            <li>
                <StyledButtonRight 
                    content="상품 등록"
                    disabled={false}
                />
            </li>
        </StyledUl>
    )
}

export default MyButton
