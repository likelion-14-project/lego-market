import styled from 'styled-components'
import {useForm} from 'react-hook-form'


const Wrapper = styled.div`
    margin-top: ${props => props.marginTop}px;
`

const InputLabel = styled.label`
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    color: #767676;
    margin-bottom: 10px;
    display: block;
    
`

const InputData = styled.input`
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

const ErrorMessage = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #EB5757;
`


function Input(props) {

    const {label, placeholder, type, name, className, marginTop, register, condition, errors} = props
    
    return (
        <Wrapper className={className} marginTop={marginTop}>
            <InputLabel>{label}</InputLabel>
            <InputData
                name={name}
                type={type}
                placeholder={placeholder}
                {...register(name,condition)}
            />
            {errors[name] && errors[name].type &&<ErrorMessage>{errors[name].message}</ErrorMessage>}
        </Wrapper>
    )
}

Input.defaultProps = {
    errors : {},
    name : '',
    register : () => {},
    condition : {}
}

export default Input
