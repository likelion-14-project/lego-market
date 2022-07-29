import styled, { keyframes, css } from "styled-components";

const logoAnimation = keyframes`
    0%{
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;
const logo2Animation = keyframes`
    0%{
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;
export const MainDiv = styled.div`
    width: 100%;
    height: 100vh;
    text-align: center;
    overflow: hidden;
    box-sizing: content-box;
    background-color: ${(props) => (props.splashLoading === false ? "#fff" : "#FBD793")};
    margin: auto;
    transition: all 600ms cubic-bezier(0.86, 0, 0.5, 1);
`;
export const MainHeader = styled.header`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 600ms cubic-bezier(0.86, 0, 0.5, 1);
    img {
        width: 200px;
        height: 200px;
        object-fit: contain;
    }
    top: ${(props) => (props.splashLoading === false ? "50%" : "30%")};
    ${(props) =>
        props.splashLoading === false
            ? css`
                  animation-name: ${logoAnimation};
                  animation-duration: 0.8s;
                  animation-timing-function: ease-out;
                  animation-fill-mode: forwards;
              `
            : css`
                  animation-name: ${logo2Animation};
                  animation-duration: 0.8s;
                  animation-timing-function: ease-out;
                  animation-fill-mode: forwards;
              `}
`;
