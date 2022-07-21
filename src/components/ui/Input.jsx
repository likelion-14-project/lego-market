import styled from "styled-components";

const Wrapper = styled.div`
    margin-top: ${(props) => props.marginTop}px;
`;

const InputLabel = styled.label`
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    color: #767676;
    margin-bottom: 10px;
    display: block;
`;

const InputData = styled.input`
    border: none;
    border-bottom: 1px solid #dbdbdb;
    padding-bottom: 8px;
    width: 100%;
    box-sizing: border-box;
    ::placeholder {
        font-family: "Spoqa Han Sans Neo";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #dbdbdb;
    }

    &:focus-within {
        width: 100%;
        outline: none;
        border: none;
        border-bottom: solid 1px #f26e22;
    }
`;

function Input(props) {
    const {
        label,
        placeholder,
        type,
        className,
        marginTop,
        register,
        errors,
        WarningMessage,
        value
    } = props;

    return (
        <Wrapper className={className} marginTop={marginTop}>
            <InputLabel>{label}</InputLabel>
            <InputData type={type} placeholder={placeholder} value={value} {...register} />
            {errors[label] && errors[label].type && WarningMessage && (
                <WarningMessage>{errors[label].message}</WarningMessage>
            )}
        </Wrapper>
    );
}

Input.defaultProps = {
    errors: {},
    name: "",
    register: () => {},
    condition: {},
};

export default Input;
