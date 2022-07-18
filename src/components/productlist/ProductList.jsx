import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display:flex;
`;
const IMG = styled.img`
  width: 200px;
`

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const url = "https://mandarin.api.weniv.co.kr";
  

  useEffect(() => {
    // 랜더링 되면 실행할거
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
      console.log(json)
      setProducts(json.product);
    };
  
    // 함수 실행
    productLoad();  
  }, []);



  console.log('실행')
  console.log(products);
return (
  <Wrapper>
    {products.map((product) => {
      return (
        <>
        <IMG src={product.itemImage}></IMG>
        <p>{product.price}</p>
        <div>{product.itemName}</div>
        </>
      )      
    })}
  </Wrapper>
)
};
export default ProductList;