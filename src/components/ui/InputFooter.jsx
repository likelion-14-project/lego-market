import React from "react";
import styled from "styled-components";

const FooterWap = styled.footer`
    position: fixed;
    left: 0;
    bottom: 0;
    min-width: 390px;
    width: 100%;
    background-color: #fff;
    z-index: 10;
    border-top: 0.5px solid #c4c4c4;
`;

const Section = styled.section`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    padding: 0 14px;
`;

const BtnImg = styled.button`
    display: flex;
    border: none;
    background: none;
    cursor: pointer;
`;
const InputLabel = styled.label`
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
`;

const Input = styled.input`
    width: calc(100% - 128px);
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    margin: 0 10px;
    border: none;
    outline: none;
`;

const BtnSend = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    font-size: 14px;
    color: #c4c4c4;
`;

function InputFooter({ img, ir, placeholder, btnTxt }) {
    return (
        <FooterWap>
            <Section>
                <BtnImg>
                    <img src={process.env.PUBLIC_URL + img} />
                </BtnImg>
                <label className="ir">{ir}</label>
                <Input type="text" placeholder={placeholder} />
                <BtnSend>{btnTxt}</BtnSend>
            </Section>
        </FooterWap>
    );
}

export default InputFooter;
