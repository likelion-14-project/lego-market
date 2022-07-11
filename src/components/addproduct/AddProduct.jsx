import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../components/ui/Input";

import WarningMessage from "../components/ui/WarningMessage";
import styled from "styled-components";
import TopNav from "../components/ui/TopNav";

const FileLabel = styled.label`
  display: inline-block;
  position: relative;
  background-color: #dbdbdb;
  cursor: pointer;
  width: 322px;
  height: 204px;
  border-radius: 10px;
`;
const IMG = styled.img`
  position: absolute;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: 10px;
`;
const UiImg = styled.img`
  bottom: 12px;
  right: 12px;
  position: absolute;
`;
const Form = styled.form`
  margin-bottom: 30px;
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
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 390px;
  height: 100vh;
  background-color: #fff;
`;

const AddProduct = (props) => {
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

  const { width, height } = props;
  const [item, setItem] = useState("");
  let [price, setPrice] = useState("");
  const [link, setLink] = useState("");
  const [itemimg, setItemImg] = useState("");
  const token = localStorage.getItem("token");


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
    const reqData = {
      product: {
        itemName: watch('상품명'),
        price: parseInt(watch('가격')),
        link: watch('판매 링크'),
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
  }

  return (
    <div>
      <TopNav content="저장" onClick={add} disabled={!isValid} />
      <Section>
        <div className="filebox">
          <LabelDiv>이미지 등록</LabelDiv>
          <FileLabel for="ex-file" onChange={handleGetImageUrl}>
            <IMG id="aa" width={"322"} height={"204"}></IMG>
            <UiImg src="./images/img-button.png" />
          </FileLabel>
          <InputFile
            type="file"
            id="ex-file"
            accept="image/*"
            onChange={handleGetImageUrl}
          ></InputFile>
        </div>
        <Form>
          <Input
            type="text"
            label="상품명"
            marginTop={16}
            placeholder="2~15자 이내여야 합니다."
            register={register("상품명", {
              required: {
                value: true,
                message: "*필수 입력 값입니다.",
              },
            })}
            errors={errors}
            WarningMessage={WarningMessage}
            // onChange={handleItem}
          />
        </Form>
        <div>
          <Input
            type="number"
            label="가격"
            marginTop={16}
            register={register("가격", {
              required: {
                value: true,
                message: "*필수 입력 값입니다.",
              },
            })}
            errors={errors}
            // onChange={handlePrice}
            WarningMessage={WarningMessage}
          />
        </div>
        <div>
          <Input
            type="text"
            label="판매 링크"
            marginTop={16}
            placeholder="URL을 입력해 주세요"
            register={register("판매 링크", {
              required: {
                value: true,
                message: "*필수 입력 값입니다.",
              },
            })}
            errors={errors}
            // onChange={handleLink}
            WarningMessage={WarningMessage}
          />
        </div>
      </Section>
    </div>
  );
};

export default AddProduct;
