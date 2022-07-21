import React from "react";
import styled from "styled-components";
import Input from "../ui/Input";
import Button from "../ui/Button";
import WarningMessage from "../ui/WarningMessage";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLogin } from "../../hooks/useLogin";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    padding: 30px 34px;
`;

const H1 = styled.h1`
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    margin-bottom: ${(props) => props.marginBottom}px;
`;

const StyledLink = styled(Link)`
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    text-decoration: none;
    color: #767676;
    display: block;
    margin-top: 20px;
    text-align: center;
`;

const StyledButton = styled(Button)`
    padding: 13px 0px;
    margin-top: 30px;
`;

function LoginPage() {
    const navigate = useNavigate();
    const {
        watch,
        register,
        handleSubmit,
        formState: { errors, isValid },
        setError,
        resetField,
    } = useForm({
        mode: "onChange",
    });

    const { error, isPending, login } = useLogin();

    const onValid = async (data) => {
        const result = await login(data["이메일"], data["비밀번호"]);

        if (result === "이메일 또는 비밀번호가 일치하지 않습니다.") {
            setError("이메일", {
                type: "custom",
                message: "*이메일 또는 비밀번호가 일치하지 않습니다.",
            });
            resetField("비밀번호");
        } else {
            navigate("/");
        }
    };

    const onInvalid = (errors) => {
        console.log(errors);
    };

    return (
        <Wrapper>
            <H1 marginBottom={40}>로그인</H1>
            <form onSubmit={handleSubmit(onValid, onInvalid)}>
                <Input
                    type="email"
                    label="이메일"
                    register={register("이메일", {
                        required: {
                            value: true,
                            message: "*필수 입력 값입니다.",
                        },
                        pattern: {
                            value: /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i,
                            message: "*올바른 이메일 형식이 아닙니다.",
                        },
                    })}
                    errors={errors}
                    WarningMessage={WarningMessage}
                />
                <Input
                    type="password"
                    label="비밀번호"
                    marginTop={16}
                    register={register("비밀번호", {
                        required: {
                            value: true,
                            message: "*필수 입력 값입니다.",
                        },
                    })}
                    errors={errors}
                    WarningMessage={WarningMessage}
                />
                <StyledButton content="로그인" disabled={!isValid} />
                <StyledLink to={"/joinpage"}>이메일로 회원가입</StyledLink>
            </form>
        </Wrapper>
    );
}

export default LoginPage;
