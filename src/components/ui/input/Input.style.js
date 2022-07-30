import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: ${(props) => props.marginTop}px;
`;

export const InputLabel = styled.label`
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    color: #767676;
    margin-bottom: 10px;
    display: block;
`;

export const InputData = styled.input`
    border: none;
    border-bottom: 1px solid #dbdbdb;
    padding-bottom: 8px;
    width: 100%;
    box-sizing: border-box;
    ::placeholder {
        font-family: "Spoqa Han Sans Neo";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #dbdbdb;
    }

    &:focus-within {
        width: 100%;
        outline: none;
        border: none;
        border-bottom: solid 1px #f26e22;
    }
`;
