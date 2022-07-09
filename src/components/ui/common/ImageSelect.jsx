import React, { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'

const Input = styled.input.attrs({
    type : "file",
    id : "file",
})`
    display: none;
`

const Img = styled.img`
    cursor: pointer;
`

function ImageSelect(props) {
    
    const {width, setImgSrc} = props

    const handleImage = (e) => {
        setImgSrc(URL.createObjectURL(e.target.files[0]))
        URL.revokeObjectURL(e.target.files[0])
    }

    return (
        <div className={props.className}>
            <label htmlFor="file" >
                <Img 
                    src={process.env.PUBLIC_URL + "/icons/upload-file.png"} 
                    alt="프로필설정버튼"
                    width={width}
                />
            </label>
            <Input onChange={handleImage}/>
        </div>
    )
}

export default ImageSelect
