import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../ui/Button'

const StyledUl = styled.ul`
margin-top: 24px;
display: flex;
justify-content: center;
gap: 12px;
`

const ProfileModifyButton = styled(Button)`
    width: 120px;
    background-color: #fff;
    padding: 8px 0px;
    color: #767676;
    border: 1px solid #DBDBDB;
`

const ProductRegisterButton = styled(Button)`
    width: 100px;
    background-color: #fff;
    padding: 8px 0px;
    color: #767676;
    border: 1px solid #DBDBDB;
`

function MyButton() {

    const navigate = useNavigate()

    return (
        <StyledUl>
            <li>
                <ProfileModifyButton 
                    content="프로필 수정"
                    disabled={false}
                    onClick={() => navigate("/profileModify")}
                />
            </li>
            <li>
                <ProductRegisterButton 
                    content="상품 등록"
                    disabled={false}
                />
            </li>
        </StyledUl>
    )
}

export default MyButton
