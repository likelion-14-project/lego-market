import React, { useState } from "react";
import styled from "styled-components";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

const InputDiv = styled.div`
  display: block;
  font-size: 12px;
  color: #767676;
  width: 322px;
  margin: 10px auto 6px;
  text-align: left;
`;

const LoginMain = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 30px;
`;
const SignUP = styled.a`
  display: block;
  color: #767676;
  font-size: 12px;
  text-align: center;
  margin-top: 20px;
  text-decoration: none;
`;
const H1 = styled.h1`
  text-align: center;
`;


const Login = () => {
  const [email, setEmail] = useState("");
const [pw, setPw] = useState("");

const handleEmail = (e) => {
  setEmail(e.target.value);
};

const handlePw = (e) => {
  setPw(e.target.value);
};

async function login() {
 

  const url = "https://mandarin.api.weniv.co.kr";
  const reqPath = "/user/login";
  const loginData = {
    user: {
      email: email,
      password: pw,
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

  localStorage.setItem("token", json.user.token);
}
const handleSubmit = (e) => {
  e.preventDefault();
};

  return (
    <LoginMain>
      <section class="login-email-container">
        {/* <h2 class="ir">이메일, 비밀번호 입력</h2> */}
        <form onSubmit={handleSubmit}>
          <H1 class="main-title login-email-title">로그인</H1>
          <InputDiv>
            <Input
              label="이메일"
              marginBottom={16}
              type="email"
              onChange={handleEmail}
            />
          </InputDiv>
          <InputDiv>
            <Input
              label="비밀번호"
              marginBottom={16}
              type="password"
              onChange={handlePw}
            />
          </InputDiv>
          <Button onClick={login} content="로그인" />
          <SignUP href="#">이메일로 회원가입</SignUP>
        </form>
      </section>
    </LoginMain>
  );
};

export default Login;
