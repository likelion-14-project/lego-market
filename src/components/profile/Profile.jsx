import React, { useEffect } from 'react'
import styled from 'styled-components'
import ProfileImage from '../ui/ProfileImage'
import Button from '../ui/Button'
import { Link } from "react-router-dom";
import { useAuthContext } from '../../hooks/useAuthContext';
import { useProfile } from '../../hooks/useProfile';

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

    console.log('profile 렌더링')

    const {user} = useAuthContext();
    
    console.log('user : ', user)
    const {error, profile, isPending} = useProfile('nodeepdive.');
    
    console.log('프라필 : ', profile)

    if(profile) {
        return (
            <Wrapper>
                <StyledProfileImg imgSrc={profile.image}/>
                <Username>{profile.username}</Username>
                <UserId>@ {profile.accountname}</UserId>
                <StyledP>{profile.intro}</StyledP>
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
                    <StyledStrong>{profile.followerCount}</StyledStrong>
                    <StyledSpan>followers</StyledSpan>
                </FollowerWrapper>
                <FollowingWrapper>
                    <StyledStrong>{profile.followingCount}</StyledStrong>
                    <StyledSpan>followings</StyledSpan>
                </FollowingWrapper>
            </Wrapper>
        )
    }


}

export default Profile