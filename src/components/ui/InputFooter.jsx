import React from "react";
import styled from "styled-components";

const FooterWap = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 260px;
    padding: 13px 20px 12px 16px;
    background: #ffffff;
`;

const Input = styled.input`
    width: 100%;
    margin: 0 15px 0;
    outline: none;
    border: none;
    padding: 15px 0 15px;
    font-weight: 400;
    font-size: 14px;
`;
const BtnImg = styled.button`
    display: flex;
    border: none;
    background: none;
    cursor: pointer;
`;

const BtnSend = styled.button`
    display: flex;
    border: none;
    background: none;
    cursor: pointer;
    font-size: 14px;
    color: #c4c4c4;
`;

function InputFooter({ img, placeholder, btnTxt }) {
    return (
        <>
            <FooterWap>
                <BtnImg>
                    <img src={process.env.PUBLIC_URL + img} />
                    {/* `/images/원하는이미지` */}
                </BtnImg>
                <Input type="text" placeholder={placeholder} />
                <BtnSend>{btnTxt}</BtnSend>
            </FooterWap>
        </>
    );
}

export default InputFooter;
