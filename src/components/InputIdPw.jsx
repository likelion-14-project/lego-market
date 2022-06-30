import React from "react";
import styled from "styled-components";
const InputInfo = styled.div`
  display: block;
  font-size: 12px;
  color: #767676;
  width: 322px;
  margin: 10px auto 6px;
  text-align: left;
`;

const InputLabel = styled.label`
  display: block;
  color: #767676;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 10px;
`;
const InputInput = styled.input`
  display: block;
  width: 100%;
  border: none;
  border-bottom: solid 1px #dbdbdb;
  &:focus-within {
    display: block;
    width: 100%;
    outline: none;
    border: none;
    border-bottom: solid 1px #f26e22;
  }
`;
const InputIdPw = () => {
  return (
    <form>
      <InputInfo>
        <InputLabel for="">이메일</InputLabel>
        <InputInput type="email" id="email" />
      </InputInfo>

      <InputInfo>
        <InputLabel for="">비밀번호</InputLabel>
        <InputInput type="password" id="pw" />
      </InputInfo>
    </form>
  );
};

export default InputIdPw;
