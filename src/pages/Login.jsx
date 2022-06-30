import React from "react";
import InputIdPw from "../components/InputIdPw";
import styled from "styled-components";
import LoginBtn from "../components/LoginBtn";

const LoginMain = styled.main`
  margin-top: 30px;
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 30px;
  text-align: center;
`;
const SignUP = styled.a`
  display: block;
  color: #767676;
  font-size: 12px;
  text-align: center;
  margin-top: 20px;
`;
const Login = () => {
  return (
    <LoginMain>
      <h1 class="main-title login-email-title">로그인</h1>
      <section class="login-email-container">
        <h2 class="ir">이메일, 비밀번호 입력 컨테이너</h2>
        <form>
          <InputIdPw />
          <LoginBtn />
          <SignUP>이메일로 회원가입</SignUP>
        </form>
      </section>
    </LoginMain>
  );
};

export default Login;
