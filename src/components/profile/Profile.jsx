import React from 'react'
import styled from 'styled-components'
import ProfileImage from '../ui/ProfileImage'
import Button from '../ui/Button'
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    max-width: 390px;
    padding: 30px 16px 26px;
    position: relative;
    box-sizing: border-box;
    margin: 0 auto;
`

const StyledProfileImg = styled(ProfileImage)`
    display: block;
    margin: 0 auto;
`

const Username = styled.strong`
    display: block;
    text-align: center;
    margin-top: 16px;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
`

const UserId = styled.strong`
    display: block;
    text-align: center;
    margin-top: 6px;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #767676;
`

const StyledP = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #767676;
    text-align: center;
    margin-top: 16px;
`

const StyledUl = styled.ul`
    margin-top: 24px;
    display: flex;
    justify-content: center;
    gap: 12px;
`

const StyledLi = styled.li`

`

const StyledButton = styled(Button)`
    width: 120px;
    background-color: #fff;
    padding: 8px 0px;
    color: #767676;
    border: 1px solid #DBDBDB;
`

const FollowerWrapper = styled.div`
    position: absolute;
    text-align: center;
    top: 65px;
    left: 40px;
`

const FollowingWrapper = styled.div`
    /* display: inline-block; */
    /* text-align: center; */
    position: absolute;
    text-align: center;
    top: 65px;
    right: 40px;
`

const StyledStrong = styled.strong`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
`

const StyledSpan = styled.span`
    display: block;
    margin-top: 6px;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    color: #767676;
`

function Profile() {
    return (
        <Wrapper>
            <StyledProfileImg />
            <Username>애월읍 위니브 감귤농장</Username>
            <UserId>@ weniv_Mandarin</UserId>
            <StyledP>애월읍 감귤 전국 배송, 귤따기 체험, 감귤 농장</StyledP>
            <StyledUl>
                <StyledLi>
                    <StyledButton 
                        content="프로필 수정"
                        disabled={false}
                    />
                </StyledLi>
                <StyledLi>
                    <StyledButton 
                        content="상품 등록"
                        disabled={false}
                    />
                </StyledLi>
            </StyledUl>
            <FollowerWrapper>
                <StyledStrong>2950</StyledStrong>
                <StyledSpan>followers</StyledSpan>
            </FollowerWrapper>
            <FollowingWrapper>
                <StyledStrong>128</StyledStrong>
                <StyledSpan>followings</StyledSpan>
            </FollowingWrapper>
        </Wrapper>
    )
}

export default Profile