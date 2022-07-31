import React from "react";
import Input from "../../ui/input/Input.jsx";
import { useForm } from "react-hook-form";
import WarningMessage from "../../ui/warningMessage/WarningMessage";
import { Wrapper, H1, StyledButton } from "./EmailJoin.style";

function EmailJoin(props) {
    const { setNextPage, setAccount } = props;

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        setError,
        resetField,
        setFocus,
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

            if (reqMsg == "사용 가능한 이메일 입니다.") {
                setAccount({
                    email: data?.이메일,
                    password: data?.비밀번호,
                });
                setNextPage(true);
            } else {
                resetField("이메일");
                setError("이메일", {
                    type: "custom",
                    message: `*${reqMsg}`,
                });
                setFocus("이메일");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Wrapper>
            <H1>이메일로 회원가입</H1>
            <form onSubmit={handleSubmit(onValid)}>
                <Input
                    label='이메일'
                    type='email'
                    placeholder='이메일 주소를 입력해 주세요.'
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
                    label='비밀번호'
                    type='password'
                    placeholder='비밀번호를 설정해 주세요.'
                    marginTop={16}
                    register={register("비밀번호", {
                        required: {
                            value: true,
                            message: "*필수 입력 값입니다.",
                        },
                        minLength: {
                            value: 6,
                            message: "*비밀번호는 6자 이상이어야 합니다.",
                        },
                    })}
                    errors={errors}
                    WarningMessage={WarningMessage}
                />
                <StyledButton content='다음' disabled={!isValid} />
            </form>
        </Wrapper>
    );
}

export default EmailJoin;
