import React from "react";
import styled from "styled-components";
import Button from "../ui/Button";
import Input from "../ui/Input.jsx";
import { useForm } from "react-hook-form";
import WarningMessage from "../ui/WarningMessage";

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
    margin-bottom: 40px;
`;

const StyledButton = styled(Button)`
    padding: 13px 0px;
    margin-top: 30px;
`;

function EmailJoin(props) {
    const { setNextPage, setAccount } = props;

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        setError,
        reset,
    } = useForm({
        mode: "onChange",
    });

    const onValid = async (data) => {
        const url = "https://mandarin.api.weniv.co.kr/user/emailvalid";
        const reqData = {
            user: {
                email: data?.이메일,
            },
        };
        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(reqData),
            });
            const json = await res.json();
            const reqMsg = json.message;

            if (reqMsg == "이미 가입된 이메일 주소 입니다.") {
                setError("이메일", {
                    type: "custom",
                    message: "*이미 가입된 이메일 주소입니다.",
                });
            } else {
                console.log(reqMsg);
                console.log(data);
                setAccount({
                    email : data?.이메일,
                    password : data?.비밀번호
                })
                setNextPage(true);
            }
        } catch (error) {
            console.error(error)
        }
    };

    return (
        <Wrapper>
            <H1>이메일로 회원가입</H1>
            <form onSubmit={handleSubmit(onValid)}>
                <Input
                    label="이메일"
                    type="email"
                    placeholder="이메일 주소를 입력해 주세요."
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
                    label="비밀번호"
                    type="password"
                    placeholder="비밀번호를 설정해 주세요."
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
                <StyledButton content="다음" disabled={!isValid} />
            </form>
        </Wrapper>
    );
}

export default EmailJoin;
