import React from "react";
import styled from "styled-components";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`;

const Span = styled.span`
    display: block;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: #767676;
    margin-top: 32px;
    margin-bottom: 20px;
`;

const StyledButton = styled(Button)`
    width: 120px;
    padding: 13px 0;
    background-color: #ea4335;
`;

function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <h1 className="visually_hidden">Not Found 페이지 입니다.</h1>
            <img
                src={process.env.PUBLIC_URL + "/icons/icon-404.png"}
                alt="404아이콘"
                width="158px"
                height="158px"
            />
            <Span>페이지를 찾을 수 없습니다.:(</Span>
            <StyledButton
                content="이전 페이지"
                disabled={false}
                onClick={() => {
                    navigate(-1);
                }}
            />
        </Wrapper>
    );
}

export default NotFoundPage;
