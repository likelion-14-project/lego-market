import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import ImageSelect from '../common/ImageSelect'
import Input from '../common/Input';
import ProfileImage from '../common/ProfileImage'
import Button from '../common/Button';
import {useForm} from 'react-hook-form'

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
    margin-bottom: 12px;
`;

const P = styled.p`
    text-align: center;
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: #767676;
    margin-bottom: 30px;
`;

const StyledImageSelect = styled(ImageSelect)`
    position: absolute;
    bottom: 0;
    right: 0;
`;

const PictureWrapper = styled.div`
    width: 110px;
    height: 110px;
    position: relative;
    margin: 0 auto;
    margin-bottom: 30px;
`;

const StyledButton = styled(Button)`
    margin-top: 30px;
    padding: 13px 0px;
`

function ProfileSetting() {

    const [imgSrc, setImgSrc] = useState('')
    const {watch, register, handleSubmit, formState : {errors, isValid}} = useForm({mode : "onChange"})

    const onSubmit = (data) => {
        console.log(data)
    }

    console.log('파일 : ', watch('file'))

    return (
        <Wrapper>
            <H1>프로필 설정</H1>
            <P>나중에 언제든지 변경할 수 있습니다.</P>
            <form onSubmit={handleSubmit(onSubmit)}>
            <PictureWrapper>
                <ProfileImage width="110px" imgSrc={imgSrc} />
                <StyledImageSelect width="36px" setImgSrc={setImgSrc} imgSrc={imgSrc}/>
            </PictureWrapper>
            <Input
                name="username"
                label="사용자 이름"
                placeholder="2~10자 이내여야 합니다."
                register={register}
                condition={{
                    required : {
                        value : true,
                        message : '필수 값입니다.'
                    },
                    validate: {
                        always: (value) =>
                            value.length >= 2 && value.length <= 10|| "글자 수를 확인해주세요."
                    }
                }}
                errors={errors}
            />
            <Input
                name="accountId"
                label="계정 ID"
                placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
                marginTop={16}
                register={register}
                condition={{
                    required : {
                        value : true,
                        message : '필수 값입니다.'
                    },
                    pattern : {
                        value : /^[a-z|A-Z|0-9|.,_]+$/,
                        message : '*영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.'
                    }
                }}
                errors={errors}
            />
            <Input
                name="intro"
                label="소개"
                placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
                marginTop={16}
                register={register}
                condition={{
                    required : {
                        value : true,
                        message : '필수 값입니다.'
                    },
                    maxLength : {
                        value : 20,
                        message : '20자 까지 입력 가능합니다.'
                    }
                }}
                errors={errors}
            />
            <StyledButton disabled={!isValid} content="감귤마켓 시작하기" />
            </form>
        </Wrapper>
    )
}

export default ProfileSetting