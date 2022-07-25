import React, { useEffect } from "react";
import styled from "styled-components";
import ImageSelect from "../ui/ImageSelect";
import Button from "../ui/Button";
import WarningMessage from "../ui/WarningMessage";
import Input from "../ui/Input.jsx";
import { useForm } from "react-hook-form";
import ProfileImage from "../ui/ProfileImage";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TopNav from "../ui/TopNav";
import BackButton from "../ui/BackButton";
import { useAuthContext } from "../../hooks/useAuthContext";

const Wrapper = styled.div`
    padding: 30px 34px;
`;

const ImageWrapper = styled.div`
    width: 110px;
    margin: 0 auto;
    position: relative;
    margin-bottom: 30px;
`;

const StyledImageSelect = styled(ImageSelect)`
    position: absolute;
    bottom: 0;
    right: 0;
`;

const SaveButton = styled(Button)`
    padding: 7px 0px;
    width: 90px;
`;

function ProfileModification() {
    const defaultImgSrc =
        process.env.PUBLIC_URL + "/images/LegoDefaultImage.png";

    const navigate = useNavigate();
    const [imgSrc, setImgSrc] = useState(defaultImgSrc);
    const { user, dispatch } = useAuthContext();

    const {
        watch,
        register,
        handleSubmit,
        setValue,
        formState: { errors, isValid },
    } = useForm({
        mode: "onChange",
    });

    useEffect(() => {
        if (user) {
            setValue("사용자 이름", user.username);
            setValue("계정 ID", user.accountname);
            setValue("소개", user.intro);
            setImgSrc(user.image);
        }
    }, [user]);

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
            console.log(message);

            if (message === "이미 가입된 계정ID 입니다.") {
                return "*이미 가입된 계정ID 입니다.";
            }
        } catch (error) {
            console.log(error);
        }
    };

    const save = async () => {
        try {
            const token = localStorage.getItem("token");

            const url = "https://mandarin.api.weniv.co.kr/user";
            const reqData = {
                user: {
                    username: watch("사용자 이름"),
                    accountname: watch("계정 ID"),
                    intro: watch("소개"),
                    image: imgSrc,
                },
            };

            const response = await fetch(url, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-type": "application/json",
                },
                body: JSON.stringify(reqData),
            });

            const json = await response.json();
            dispatch({ type: "modify", payload: json.user });
            navigate("/home");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <TopNav
                leftChild={<BackButton />}
                rightChild={
                    <SaveButton
                        content='저장'
                        disabled={!isValid}
                        onClick={save}
                    />
                }
            />
            <Wrapper>
                <form onSubmit={handleSubmit()}>
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
                                values: accountValid,
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
                </form>
            </Wrapper>
        </>
    );
}

export default ProfileModification;
