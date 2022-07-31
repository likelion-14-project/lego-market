import React from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper, Span, StyledButton } from "./NotFoundPage.style";

function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <h1 className='visually_hidden'>Not Found 페이지 입니다.</h1>
            <img
                src={process.env.PUBLIC_URL + "/icons/icon-404.png"}
                alt='404아이콘'
                width='158px'
                height='158px'
            />
            <Span>페이지를 찾을 수 없습니다.:(</Span>
            <StyledButton
                content='이전 페이지'
                disabled={false}
                onClick={() => {
                    navigate(-1);
                }}
            />
        </Wrapper>
    );
}

export default NotFoundPage;
