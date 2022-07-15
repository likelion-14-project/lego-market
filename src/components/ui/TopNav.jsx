import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    height: 48px;
    border-bottom: 0.5px solid #DBDBDB;
    padding: 12px;
    overflow: hidden;
    box-sizing: border-box;
    display: flex;
    align-items: center;
`

const Left = styled.div`
    margin-right: 20px;
`

const Center = styled.div`
    flex-grow: 1;
`

const Right = styled.div`
    margin-left: auto;
`

function TopNav(props) {

    const {leftChild, centerChild, rightChild} = props

    return (
        <Wrapper>
            <Left>{leftChild}</Left>
            <Center>{centerChild}</Center>
            <Right>{rightChild}</Right>
        </Wrapper>
    )
}

export default TopNav
