import React from "react";
import { FooterWap, Section, Input, BtnSend } from "./inputFooter.style";

function InputFooter(props) {
    const {
        img,
        ir,
        placeholder,
        value,
        onChange,
        onKeyPress,
        onClick,
        btnTxt,
        disabled,
    } = props;

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
                    onKeyPress={onKeyPress}
                />
                <BtnSend type="button" onClick={onClick} disabled={disabled}>
                    {btnTxt}
                </BtnSend>
            </Section>
        </FooterWap>
    );
}

export default InputFooter;
