import styled, { keyframes } from "styled-components";

const fadeOut = keyframes`
  0%{
    opacity : 0;
    
  }
  100%{
    opacity : 1;
  }
  `;
  
export const SearchDivWrap = styled.ul`
    max-width: 390px;
    width: 100%;
`;
export const ListWrap = styled.li`
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    animation: ${fadeOut} 0.5s linear both;
`;
export const SearchInput = styled.input`
    width: calc(100% - 38px);
    height: 32px;
    padding: 4px 16px;
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
export const MainContentsWrap = styled.main`
    width: 100%;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 16px 0;
    height: calc(100% - 61px);
    overflow-y: scroll;
`;
