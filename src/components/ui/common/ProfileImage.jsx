import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
    border-radius: 50%;
`

function ProfileImage(props) {

    const {className, imgSrc, width} = props

    return (
        <Image
            className={className}
            width={width}
            src={imgSrc ||
                process.env.PUBLIC_URL + "/images/basic-profile-img.png"}
            alt="프로필사진" 
        />
    )
}

export default ProfileImage
