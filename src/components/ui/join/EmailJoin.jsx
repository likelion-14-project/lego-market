import React from 'react'
import styled from 'styled-components';
import Input from '../common/Input';
import Button from '../common/Button';
import {useForm} from 'react-hook-form'
import { useState } from 'react';


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
`

function EmailJoin() {

    const {watch, register, handleSubmit, formState : {errors, isValid}} = useForm({mode:"onChange"});

    const [nextPage, setNextPage] = useState(false)

    const onSubmit = (data) => {
        console.log(data)
    }

    const emailValid = async () => {
        const url = "https://mandarin.api.weniv.co.kr/user/emailvalid";
        const reqData = {
                "user":{
                        "email": watch('email')
                }
        }

        const response = await fetch(url, {
            method : "POST",
            headers : {
                "Content-type" : "application/json"
            },
            body : JSON.stringify(reqData)
        })

        const json = await response.json();
        const message = json.message
        console.log(message)
        if(message === '사용 가능한 이메일 입니다.') {
            return
        }

        return message
    }

    return (
        <Wrapper>
            <H1>이메일로 회원가입</H1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    name="email" 
                    type="email"
                    label={"이메일"} 
                    placeholder={"이메일 주소를 입력해 주세요."}
                    register={register}
                    condition={{
                        required : {
                            value : true,
                            message : "이메일을 입력해주세요"
                        },
                        pattern : {
                            value : /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i,
                            message : "올바른 이메일 형식이 아닙니다."
                        },
                        validate : {
                            value : emailValid,
                            message : emailValid
                        }
                    }}
                    errors={errors}
                />
                <Input
                    name="password"
                    type="password" 
                    label={"비밀번호"}
                    placeholder={"비밀번호를 설정해 주세요."}
                    marginTop={16}
                    register={register}
                    condition={{
                        required : {
                            value : true,
                            message : '비밀번호를 입력해주세요'
                        },
                        minLength : {
                            value : 4,
                            message : '최소 4글자 이상 입력해주세요'
                        }
                    }}
                    errors={errors}
                />
                <StyledButton disabled={!isValid} content={"다음"}/>
            </form>
        </Wrapper>
    )
}

export default EmailJoin