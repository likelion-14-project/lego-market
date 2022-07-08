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
    border: none;
    border-bottom: 1px solid #DBDBDB;
    padding-bottom: 8px;
    width: 100%;
    box-sizing: border-box;
    ::placeholder {
        font-family: 'Spoqa Han Sans Neo';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #DBDBDB;
    }
    
    &:focus-within {
    width: 100%;
    outline: none;
    border: none;
    border-bottom: solid 1px #f26e22;
    
    }
`


function Input(props) {

    const {label, placeholder, onChange, type, name, className} = props
    const inputRef = useRef()

    
    return (
        <div className={className}>
            <InputLabel>{label}</InputLabel>
            <InputData
                required
                name={name}
                type={type}
                onChange={onChange}
                placeholder={placeholder}
                ref={inputRef}
            />
        </div>
    )
}

export default Input
