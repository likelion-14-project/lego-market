import React, { useState } from "react";
import Input from "../components/ui/Input";
import styled from "styled-components";
import TopNav from "../components/ui/TopNav";
import "../hooks/comma";
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
  bottom: 12px;
  right: 12px;
`;
const DIV = styled.div`
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
  justify-content: center;
  flex-direction: column;
  min-width: 390px;
  height: 100vh;
  background-color: #fff;
`;

const AddProduct = () => {
  const [item, setItem] = useState("");
  let [price, setPrice] = useState("");
  const [link, setLink] = useState("");
  const [itemimg, setItemImg] = useState("");
  const token = localStorage.getItem("token");

  const handleItem = (e) => {
    setItem(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleLink = (e) => {
    setLink(e.target.value);
  };
  // const handleItemimg = (e) => {
  //   setItemImg(e.target.src);
  // };
  price = parseInt(price);
  console.log(typeof price);
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
  }

  async function add() {
    const reqData = {
      product: {
        itemName: item,
        price: price,
        link: link,
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
      <TopNav content="저장" onClick={add} />
      <Section>
        <div className="filebox">
          <LabelDiv>이미지 등록</LabelDiv>
          <FileLabel for="ex-file" onChange={handleGetImageUrl}>
            <img id="aa"></img>
            <IMG src="./images/img-button.png" />
          </FileLabel>
          <InputFile
            type="file"
            id="ex-file"
            accept="image/*"
            onChange={handleGetImageUrl}
          ></InputFile>
        </div>
        <DIV>
          <Input
            label="상품명"
            type="text"
            placeholder="2~15자 이내여야 합니다."
            marginBottom={16}
            id="itemName"
            onChange={handleItem}
          />
        </DIV>
        <div>
          <Input
            label="가격"
            type="text"
            placeholder="숫자만 입력 가능합니다."
            marginBottom={16}
            id="price"
            onChange={handlePrice}
          />
        </div>
        <div>
          <Input
            label="판매 링크"
            type="text"
            placeholder="URL을 입력해 주세요."
            marginBottom={16}
            id="link"
            onChange={handleLink}
          />
        </div>
      </Section>
    </div>
  );
};

export default AddProduct;
