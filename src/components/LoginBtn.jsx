import React from "react";
import styled from "styled-components";

const LoginButton = styled.button`
  display: inline-block;
  padding: 10px 15px;
  border-radius: 44px;
  background-color: #f26e22;
  width: 100%;
  border: none;
  color: #ffffff;
  font-weight: 500;
  margin-top: 33px;
  cursor: pointer;
`;

async function login() {
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#pw").value;

  const url = "https://mandarin.api.weniv.co.kr";
  const reqPath = "/user/login";
  const loginData = {
    user: {
      email: email,
      password: password,
    },
  };
  const res = await fetch(url + reqPath, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(loginData),
  });
  const json = await res.json();
  console.log(json, "제이손입니다");
}

const LoginBtn = () => {
  return (
    <LoginButton type="button" onClick={login}>
      로그인
    </LoginButton>
  );
};

export default LoginBtn;
