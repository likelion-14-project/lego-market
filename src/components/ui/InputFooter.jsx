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
    img {
        width: 36px;
        height: 36px;
        border: 0.5px solid #dbdbdb;
        border-radius: 50%;
    }
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
    color: #df6565;
    :disabled {
        color: #ccc;
    }
`;

function InputFooter(props) {
    const { img, ir, placeholder, value, onChange, onClick, btnTxt, disabled } =
        props;

    return (
        <FooterWap>
            <Section>
                <img src={img} />
                <label className="visually_hidden">{ir}</label>
                <Input
                    type="text"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
                <BtnSend type="button" onClick={onClick} disabled={disabled}>
                    {btnTxt}
                </BtnSend>
            </Section>
        </FooterWap>
    );
}

export default InputFooter;
