import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
    width: 110px;
    height: 110px;
    border-radius: 50%;
    border: 1px solid #DBDBDB;
`

function ProfileImage(props) {

    const {imgSrc, className} = props

    const defaultImgSrc = process.env.PUBLIC_URL + "/images/LegoDefaultImage.png"

    return <Image className={className} src={imgSrc === null ? defaultImgSrc : imgSrc}/>
}

ProfileImage.defaultProps = {
    imgSrc : null
}

export default ProfileImage
