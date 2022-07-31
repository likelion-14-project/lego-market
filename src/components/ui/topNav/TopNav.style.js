import styled from "styled-components";

export const Wrapper = styled.div`
    height: 48px;
    border-bottom: 0.5px solid #dbdbdb;
    padding: 12px;
    overflow: hidden;
    box-sizing: border-box;
    display: flex;
    align-items: center;
`;

export const Left = styled.div`
    margin-right: 20px;
`;

export const Center = styled.div`
    flex-grow: 1;
`;

export const Right = styled.div`
    margin-left: auto;
`;
