import React, { Component, useState } from "react";
import styled from "styled-components";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import WarningMessage from "../components/ui/WarningMessage";
import { useForm } from "react-hook-form";

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

const A = styled.a.attrs({
    href: "#",
})`
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

    const login = async (data) => {
        const url = "https://mandarin.api.weniv.co.kr/user/login";

        const loginData = {
            user: {
                email: data["이메일"],
                password: data["비밀번호"],
            },
        };

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(loginData),
        });

        const json = await response.json();
        console.log("json : ", json);

        if (json.user) {
            localStorage.setItem("token", json.user.token);
            return json.user.token;
        } else if (json.message) {
            return json.message;
        }
    };

    const onValid = async (data) => {
        const result = await login(data);
        console.log(result);

        if (result === "이메일 또는 비밀번호가 일치하지 않습니다.") {
            setError("이메일", {
                type: "custom",
                message: "*이메일 또는 비밀번호가 일치하지 않습니다.",
            });
            resetField("비밀번호");
        } else {
            // 라우팅처리를 해주려고합니다.
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
                {/* 링크로 수정해야합니다. */}
                <A>이메일로 회원가입</A>
            </form>
        </Wrapper>
    );
}

export default LoginPage;
