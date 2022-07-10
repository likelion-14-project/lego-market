import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useRef } from 'react'


const InputLabel = styled.label`
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    color: #767676;
    margin-bottom: 10px;
    display: block;
    
`

const InputData = styled.input.attrs({
    required : true
})`
display:block;
    border: none;
    border-bottom: 1px solid #DBDBDB;
    padding-bottom: 8px;
    width: 100%;
    box-sizing: border-box;
    &:focus-within {
    display: block;
    width: 100%;
    outline: none;
    border: none;
    border-bottom: solid 1px #f26e22;
  }
    ::placeholder {
        font-family: 'Spoqa Han Sans Neo';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #DBDBDB;
    }
    margin-bottom: ${(props) => (props.marginBottom)}px;
`


function Input(props) {

    const {label, marginBottom, placeholder, onChange, type, name, id, onKeyUp} = props
    const inputRef = useRef()

    
    return (
        <>
            <InputLabel>{label}</InputLabel>
            <InputData
                {...props}
            />
        </>
    )
}

export default Input