import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "../components/modal/Modal";
import AlertModal from "../components/modal/AlertModal";

const Wrapper = styled.div`
  display: flex;
  margin-top: 16px;
`;
const IMG = styled.img`
  width: 140px;
  height: 90px;
  border-radius: 8px;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`;
const P = styled.p`
  color: #ffa200;
  font-size: 12px;
  font-weight: 700;
  margin-top: 4px;
  text-align: left;
`;
const DIV = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin-top: 6px;
  text-align: left;
`;
const Head = styled.div`
  font-size: 16px;
  font-weight: 700;
`;
const Section = styled.section`
  margin: 20px 21px;
`;
const Button = styled.button`
  background-color: white;
`;
const ProductList = () => {
  const [modal, setModal] = useState(false);
  const [alertModal, setAlertModal] = useState(false);

  const modalMenuList = [
    {
      content: "삭제",
      onClick: () => {
        
        setAlertModal(true);
      },
    },
    {
      content: "수정",
      onClick: () => {
      },
    },
    {
      content: "웹사이트에서 상품 보기",
      onClick: ()=>{}
    }
  ];

  const alertButton = {
    content: "삭제",
    onClick: () => {},
  };

  const [products, setProducts] = useState([]);
  const url = "https://mandarin.api.weniv.co.kr";

  useEffect(() => {
    const productLoad = async () => {
      const token = window.localStorage.getItem("token");
      const res = await fetch(url + "/product/test13", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      });
      const json = await res.json();
      console.log(json);
      setProducts(json.product);
    };

    // 함수 실행
    productLoad();
  }, []);

  console.log(products);

  if (!products) {
    return <div></div>;
  }
  return (
    <>
      <Section>
        <Head>판매중인 상품</Head>
        <Wrapper>
          {products.map((product) => {
            return (
              <>
                <Button onClick={()=> setModal(!modal)}>
                  <IMG src={product.itemImage}></IMG>
                  <DIV>{product.itemName}</DIV>
                  <P>{product.price}원</P>
                </Button>
              </>
            );
          })}
        </Wrapper>
      </Section>
      <Modal modal={modal} setModal={setModal} modalMenuList={modalMenuList} />
      <AlertModal
        alertModal={alertModal}
        setAlertModal={setAlertModal}
        setModal={setModal}
        content={"상품을 삭제할까요?"}
        alertButton={alertButton}
      />
    </>
  );
};
export default ProductList;

//판매 중인 상품을 클릭하면 하단에 상품 삭제, 수정, 웹사이트에서 상품 보기 버튼이 포함된 메뉴가 나타납니다. (단, 나의 프로필 페이지가 아닐 경우 상품을 클릭하면 바로 상품 판매 사이트로 이동됩니다.)
