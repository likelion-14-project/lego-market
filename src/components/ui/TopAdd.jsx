import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Header = styled.header`
    position: fixed;
    left: 0;
    top: 0;
    min-width: 390px;
    width: 100%;
    background-color: #fff;
    z-index: 10;
`;
const Section = styled.section`
    display: flex;
    justify-content: space-between;
    position: relative;
    align-items: center;
    max-width: 100%;
    height: 48px;
    padding: 0 16px;
    border-bottom: 0.5px solid #dbdbdb;
`;

const StyledButton = styled(Button)`
    width: 90px;
    padding: 7px 26px 7px 25px;
    font-size: 14px;
    float: right;
`;
const ArrowButton = styled.button`
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    img {
        width: 22px;
        height: 22px;
    }
`;

function TopAdd(props) {
    const navigate = useNavigate();
    const { onClick, content, disabled, upLoadButtonClicked } = props;
    return (
        <Header>
            <Section>
                <ArrowButton
                    type="button"
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    <img
                        src={process.env.PUBLIC_URL + "icons/icon-arrow-left.png"}
                        alt="뒤로가기"
                    />
                </ArrowButton>
                <StyledButton onClick={()=>{onClick()
                upLoadButtonClicked()
                }} content={content} disabled={disabled} />
            </Section>
        </Header>
    );
}

export default TopAdd;
