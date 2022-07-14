import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

const Wrapper = styled.section`
    padding: 0px 16px;
    position: relative;
    display: flex;
    align-items: center;
    max-width: 100%;
    height: 48px;
    border-bottom: 0.5px solid #dbdbdb;
`;
const StyledButton = styled(Button)`
    width: 90px;
    padding: 7px 26px 7px 25px;
    font-size: 14px;
    float: right;
`;

const SearchInput = styled.input`
    width: 100%;
    height: 32px;
    padding: 4px 16px;
    margin-left: 20px;
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    color: #000;
    border: none;
    background-color: #f2f2f2;
    border-radius: 32px;
    outline: none;
    ::-webkit-input-placeholder {
        color: #b5b0b0;
    }
`;

const ArrowButton = styled.button`
    background-color: white;
    width: 22px;
    height: 22px;
    padding: 0px;
    border: none;
    cursor: pointer;
`;
// process.env.PUBLIC_URL
function TopNav(props) {
    const { onClick, content, pathname, onChange } = props;
    const navigate = useNavigate();
    console.log(pathname);

    return (
        <Wrapper>
            <h1 className="visually_hidden">사용자검색페이지</h1>
            <ArrowButton type="button" onClick={()=> navigate(-1)}>
                <img
                    src={process.env.PUBLIC_URL + "/images/icon-arrow-left.png"}
                    alt="뒤로가기"
                />
            </ArrowButton>
            <SearchInput
                placeholder="계정검색"
                onChange={onChange}
            ></SearchInput>
            {/* <StyledButton onClick={onClick} content={content}/> */}
        </Wrapper>
    );
}

export default TopNav;

// header -> pathname 에 따라 다르게 렌더
// /home , /searchpage , /editpost , /profile
