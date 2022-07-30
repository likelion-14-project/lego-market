import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../ui/input/Input";
import WarningMessage from "../ui/warningMessage/WarningMessage";
import styled from "styled-components";
import TopNav from "../ui/topNav/TopNav";
import Button from "../ui/button/Button";

import BackButton from "../ui/backButton/BackButton";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    padding: 30px 34px;
`;
const FileLabel = styled.label`
    display: inline-block;
    position: relative;
    background-color: #dbdbdb;
    cursor: pointer;
    height: 204px;
    border-radius: 10px;
`;
const SaveButton = styled(Button)`
    padding: 7px 0px;
    width: 90px;
`;

const IMG = styled.img`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    border-radius: 10px;
    border: none;
`;
const UiImg = styled.img`
    bottom: 12px;
    right: 12px;
    position: absolute;
`;

const InputFile = styled.input`
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
`;
const LabelDiv = styled.div`
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    color: #767676;
    margin-bottom: 10px;
    display: block;
`;

const AddProduct = (props) => {
    const {
        watch,
        register,
        formState: { errors, isValid },
    } = useForm({
        mode: "onChange",
    });
    const [itemimg, setItemImg] = useState("");
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const inputPriceFormat = (str) => {
        const comma = (str) => {
            str = String(str);
            return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
        };
        const uncomma = (str) => {
            str = String(str);
            return str.replace(/[^\d]+/g, "");
        };
        return comma(uncomma(str));
    };

    //이미지 업로드
    const url = "https://mandarin.api.weniv.co.kr";
    async function imageUpload(file) {
        const formData = new FormData();
        formData.append("image", file);
        const response = await fetch(url + "/image/uploadfile", {
            method: "POST",
            body: formData,
        });
        console.log(response);
        const json = await response.json();
        console.log(json);
        return url + "/" + json.filename;
    }
    async function handleGetImageUrl(e) {
        console.log(e.target.files);
        const file = e.target.files[0];
        const imgSrc = await imageUpload(file);
        document.querySelector("#aa").src = imgSrc;
        setItemImg(imgSrc);
    }
    //서버 등록
    async function add() {
        const price = Commaprice.split(",").reduce(
            (curr, acc) => curr + acc,
            ""
        );

        const reqData = {
            product: {
                itemName: watch("상품명"),
                price: parseInt(price),
                link: watch("판매 링크"),
                itemImage: itemimg,
            },
        };

        const response = await fetch(url + "/product", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-type": "application/json",
            },
            body: JSON.stringify(reqData),
        });
        const json = await response.json();
        console.log(json);
        navigate("/myprofile");
    }

    const Commaprice = inputPriceFormat(watch("가격"));
    console.log(Commaprice);
    console.log(parseInt(Commaprice));

    return (
        <>
            <TopNav
                leftChild={<BackButton />}
                rightChild={
                    <SaveButton
                        content='저장'
                        disabled={!isValid}
                        onClick={add}
                    />
                }
            />
            <Wrapper>
                <section>
                    <LabelDiv>이미지 등록</LabelDiv>
                    <FileLabel for='ex-file' onChange={handleGetImageUrl}>
                        <IMG id='aa' width={"322"} height={"204"}></IMG>
                        <UiImg src='./images/img-button.png' />
                    </FileLabel>
                    <InputFile
                        type='file'
                        id='ex-file'
                        accept='image/*'
                        onChange={handleGetImageUrl}
                    ></InputFile>
                </section>
                <form>
                    <Input
                        type='text'
                        label='상품명'
                        marginTop={16}
                        placeholder='2~15자 이내여야 합니다.'
                        register={register("상품명", {
                            required: {
                                value: true,
                                message: "*필수 입력 값입니다.",
                            },
                            minLength: {
                                value: 2,
                                message: "*상품명은 2글자 이상 이어야 합니다.",
                            },
                            maxLength: {
                                value: 15,
                                message:
                                    "*상품명은 15자까지 작성할 수 있습니다.",
                            },
                        })}
                        errors={errors}
                        WarningMessage={WarningMessage}
                    />
                </form>
                <div>
                    <Input
                        type='text'
                        value={Commaprice}
                        label='가격'
                        marginTop={16}
                        placeholder='숫자만 입력 가능합니다.'
                        register={register("가격", {
                            required: {
                                value: true,
                                message: "*필수 입력 값입니다.",
                            },
                        })}
                        errors={errors}
                        WarningMessage={WarningMessage}
                    />
                </div>
                <div>
                    <Input
                        type='text'
                        label='판매 링크'
                        marginTop={16}
                        placeholder='URL을 입력해 주세요'
                        register={register("판매 링크", {
                            required: {
                                value: true,
                                message: "*필수 입력 값입니다.",
                            },
                            pattern: {
                                value: /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/,
                                message: "*URL을 입력하세요.",
                            },
                        })}
                        errors={errors}
                        WarningMessage={WarningMessage}
                    />
                </div>
            </Wrapper>
        </>
    );
};

export default AddProduct;
