import React, { useState } from 'react'
import styled from 'styled-components'
import ImageSelect from '../ui/ImageSelect'
import ProfileImage from '../ui/ProfileImage'
import Input from "../ui/Input.jsx"
import {useForm} from "react-hook-form"
import WarningMessage from "../ui/WarningMessage"
import Button from '../ui/Button'

const Wrapper = styled.div`
    padding: 30px 34px;
`

const H1 = styled.h1`
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 12px;
    text-align: center;
`

const P = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: #767676;
    text-align: center;
    margin-bottom: 30px;
`

const ImageWrapper = styled.div`
    width: 110px;
    margin: 0 auto;
    position: relative;
    margin-bottom: 30px;
`

const StyledImageSelect = styled(ImageSelect)`
    position: absolute;
    bottom: 0;
    right: 0;
`

const StyledButton = styled(Button)`
    padding: 13px 0px;
    margin-top: 30px;
`

function ProfileSetting() {

    const [imgSrc, setImgSrc] = useState(null)

    const {
        watch,
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm({
        mode: "onChange",
    });

    const emailValid = async () => {
        
        const url = "https://mandarin.api.weniv.co.kr/user/accountnamevalid"

        const reqData = {
            "user":{
                "accountname": watch("계정 ID")
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

        if(message === "이미 가입된 계정ID 입니다.") {
            return "*이미 가입된 계정ID 입니다."
        }

    }


    const onValid = (data) => {
        console.log(data)
    }


    return (
        <Wrapper>
            <H1>프로필 설정</H1>
            <P>나중에 언제든지 변경할 수 있습니다.</P>
            <form onSubmit={handleSubmit(onValid)}>
                <ImageWrapper>
                    <ProfileImage imgSrc={imgSrc}/>
                    <StyledImageSelect 
                        width={30}
                        setImgSrc={setImgSrc}
                    />
                </ImageWrapper>
                <Input 
                    label="사용자 이름"
                    type="text"
                    placeholder="2~10자 이내여야 합니다."
                    register={register("사용자 이름", {
                        required : {
                            value : true,
                            message : "*필수 입력 값입니다."
                        },
                        validate : {
                            always : (value) => value.length >= 2 && value.length <= 10 || "*2~10자 이내여야 합니다."
                        }
                    })}
                    errors={errors}
                    WarningMessage={WarningMessage}
                />
                <Input 
                    label="계정 ID"
                    type="text"
                    placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
                    register={register("계정 ID", {
                        required : {
                            value : true,
                            message : "*필수 입력 값입니다."
                        },
                        pattern : {
                            value : /^[a-zA-Z0-9._]*$/,
                            message : "*영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
                        },
                        validate : {
                            always : emailValid
                        }
                    })}
                    errors={errors}
                    WarningMessage={WarningMessage}
                    marginTop={16}
                />
                <Input 
                    label="소개"
                    type="text"
                    placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
                    register={register("소개", {
                        required : {
                            value : true,
                            message : "*필수 입력 값입니다."
                        }
                    })}
                    errors={errors}
                    WarningMessage={WarningMessage}
                    marginTop={16}
                />
                <StyledButton content="레고마켓 시작하기" disabled={!isValid}/>
            </form>
        </Wrapper>
    )
}

export default ProfileSetting
