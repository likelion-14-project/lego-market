import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Img = styled.img`
    width: 129px;
    height: 157px;
`;

function LoadingPage() {
    return (
        <Wrapper>
            <Img src={process.env.PUBLIC_URL + "/images/Loading.png"} />
        </Wrapper>
    );
}

export default LoadingPage;
