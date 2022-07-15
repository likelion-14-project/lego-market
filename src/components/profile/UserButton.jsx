import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../ui/Button'

const StyledUl = styled.ul`
margin-top: 24px;
display: flex;
justify-content: center;
gap: 10px;
`

const Circle = styled.span`
    display: inline-block;
    background-color: inherit;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    padding: 0;
    border: 1px solid #DBDBDB;
    background-size: 20px 20px;
    background-position: center;
    background-repeat: no-repeat;
`

const Messaageicon = styled(Circle)`
    background-image: url(${process.env.PUBLIC_URL + "/icons/icon-message-circle.png"});
`

const Shareicon = styled(Circle)`
    background-image: url(${process.env.PUBLIC_URL + "/icons/icon-share.png"});
`

const StyledButton = styled(Button)`
    width: 120px;
    padding: 8px 0px;
`

function UserButton() {

    return (
        <StyledUl>
            <li>
                <Link to={""}>
                    <Messaageicon />
                </Link>
            </li>
            <li>
                <StyledButton content="팔로우" disabled={false}/>
            </li>
            <li>
                <Link to={""}>
                    <Shareicon />
                </Link>
            </li>
        </StyledUl>
    )
}

export default UserButton
