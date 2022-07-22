import React from "react";
import styled, { keyframes } from "styled-components";

const loading = keyframes`
    0% {
        top: 0;
        left: 0;
    }
    25% {
        top: 0;
        left: calc(100% - 30px);
        background-color: dodgerblue;
    }
    50% {
        top: calc(100% - 30px);
        left: calc(100% - 30px);
        background-color: orange;
    }
    75% {
        top: calc(100% - 30px);
        left: 0;
        background-color: yellowgreen;
    }
    100% {
        top: 0;
        left: 0;
    }
`;

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LoadingWrapper = styled.div`
    width: 100px;
    height: 100px;
    position: relative;
`;

const LoadingSpan = styled.span`
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: gray;
    top: 0;
    left: 0;
    animation: ${loading} 1.5s infinite;

    :nth-child(1) {
        background-color: crimson;
    }

    :nth-child(2) {
        animation-delay: 0.8s;
    }
`;

function LoadingPage() {
    return (
        <Wrapper>
            <LoadingWrapper>
                <LoadingSpan></LoadingSpan>
                <LoadingSpan></LoadingSpan>
            </LoadingWrapper>
        </Wrapper>
    );
}

export default LoadingPage;
