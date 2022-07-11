import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Wrapper = styled.div`
    padding : 8px 16px;
    border-bottom: 0.5px solid #DBDBDB;
    position: relative;
    overflow: hidden;
`
const StyledButton = styled(Button)`
    width: 90px;
    padding: 7px 26px 7px 25px;
    font-size: 14px;
    float: right;
`

const ArrowButton = styled.button`
    background-color: white;
    padding: 0px;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 13px;
`

function TopNav(props) {

    const {onClick, content} = props

    return (
        <Wrapper>
            <ArrowButton type='button'>
                <img src="/images/icon-arrow-left.png" alt="" />
            </ArrowButton>
            <StyledButton onClick={onClick} content={content}/>
        </Wrapper>
        
    )
}

export default TopNav