import styled from "styled-components";

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
        width: 168px;
        height: 195px;
    }
    top: ${(props) => (props.splashLoading === false ? "50%" : "30%")};
`;
