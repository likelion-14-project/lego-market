import { Wrapper, InputLabel, InputData } from "./Input.style";

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
        value,
    } = props;

    return (
        <Wrapper className={className} marginTop={marginTop}>
            <InputLabel>{label}</InputLabel>
            <InputData
                type={type}
                placeholder={placeholder}
                value={value}
                {...register}
            />
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
