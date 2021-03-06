import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLogin } from "../../../hooks/useLogin";

import ProfileImage from "../../ui/profileImage/ProfileImage";
import Input from "../../ui/input/Input.jsx";
import WarningMessage from "../../ui/warningMessage/WarningMessage";
import {
    Wrapper,
    H1,
    P,
    ImageWrapper,
    StyledImageSelect,
    StyledButton,
} from "./ProfileSetting.style";

function ProfileSetting(props) {
    const navigate = useNavigate();
    const { account } = props;

    const defaultImgSrc =
        process.env.PUBLIC_URL + "/images/LegoDefaultImage.png";

    const [imgSrc, setImgSrc] = useState(defaultImgSrc);
    const { login } = useLogin();

    const {
        watch,
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        mode: "onChange",
    });

    const accountValid = async () => {
        try {
            const url =
                "https://mandarin.api.weniv.co.kr/user/accountnamevalid";
            const reqData = {
                user: {
                    accountname: watch("계정 ID"),
                },
            };

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(reqData),
            });

            const json = await response.json();
            const message = json.message;

            if (message === "사용 가능한 계정ID 입니다.") {
                return;
            } else {
                return `*${message}`;
            }
        } catch (error) {
            console.log(error);
        }
    };

    const onValid = async (data) => {
        try {
            const url = "https://mandarin.api.weniv.co.kr/user";
            const reqData = {
                user: {
                    username: data["사용자 이름"],
                    email: account.email,
                    password: account.password,
                    accountname: data["계정 ID"],
                    intro: data["소개"],
                    image: imgSrc,
                },
            };

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(reqData),
            });

            const json = await response.json();

            if (json) {
                login(account.email, account.password);
                navigate("/");
            } else {
                throw Error("에러가 발생했습니다.");
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Wrapper>
            <H1>프로필 설정</H1>
            <P>나중에 언제든지 변경할 수 있습니다.</P>
            <form onSubmit={handleSubmit(onValid)}>
                <ImageWrapper>
                    <ProfileImage imgSrc={imgSrc} />
                    <StyledImageSelect width={30} setImgSrc={setImgSrc} />
                </ImageWrapper>
                <Input
                    label='사용자 이름'
                    type='text'
                    placeholder='2~10자 이내여야 합니다.'
                    register={register("사용자 이름", {
                        required: {
                            value: true,
                            message: "*필수 입력 값입니다.",
                        },
                        validate: {
                            always: (value) =>
                                (value.length >= 2 && value.length <= 10) ||
                                "*2~10자 이내여야 합니다.",
                        },
                    })}
                    errors={errors}
                    WarningMessage={WarningMessage}
                />
                <Input
                    label='계정 ID'
                    type='text'
                    placeholder='영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'
                    register={register("계정 ID", {
                        required: {
                            value: true,
                            message: "*필수 입력 값입니다.",
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9._]*$/,
                            message:
                                "*영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.",
                        },
                        validate: {
                            always: accountValid,
                        },
                    })}
                    errors={errors}
                    WarningMessage={WarningMessage}
                    marginTop={16}
                />
                <Input
                    label='소개'
                    type='text'
                    placeholder='자신과 판매할 상품에 대해 소개해 주세요!'
                    register={register("소개", {
                        required: {
                            value: true,
                            message: "*필수 입력 값입니다.",
                        },
                    })}
                    errors={errors}
                    WarningMessage={WarningMessage}
                    marginTop={16}
                />
                <StyledButton content='레고마켓 시작하기' disabled={!isValid} />
            </form>
        </Wrapper>
    );
}

export default ProfileSetting;
