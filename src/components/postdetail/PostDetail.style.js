import styled from "styled-components";

export const DetailMain = styled.main`
    width: 100%;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    height: calc(100% - 148px);
    overflow-y: scroll;
    overflow-x: hidden;
`;

export const DetailWrap = styled.div`
    width: 100%;
    padding: 20px 16px;
    border-bottom: 1px solid #dbdbdb;
`;
